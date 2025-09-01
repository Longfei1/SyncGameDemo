package server

import (
	"GameServer/msg"
	"GameServer/src/config"
	"GameServer/src/network"
	"container/list"
	"fmt"
	"github.com/rs/zerolog/log"
	"runtime/debug"
	"time"
)

type GameServer struct {
	webSocket *network.WebServer

	msgRoute map[msg.MsgId]func(p *Player, req *msg.BodyReq)

	quit     chan int
	taskChan chan func()

	timerList list.List

	playerMap       map[*network.WsClient]*Player
	playerIdCounter uint64

	room *Room
}

func NewGameServer() *GameServer {
	server := &GameServer{
		msgRoute:  make(map[msg.MsgId]func(p *Player, req *msg.BodyReq)),
		playerMap: make(map[*network.WsClient]*Player),
		quit:      make(chan int),
		taskChan:  make(chan func(), 2000),
	}
	server.webSocket = network.NewWebServer(NewProtobufProcessor(server), server)

	server.Init()

	return server
}

func (s *GameServer) RouteMsg(client *network.WsClient, req *msg.BodyReq) {
	s.RunInMain(func() {
		p, ok := s.playerMap[client]
		if !ok {
			s.playerIdCounter++
			p = NewPlayer(s.playerIdCounter, client)

			s.playerMap[client] = p
		}

		h, ok := s.msgRoute[req.MsgId]
		if !ok {
			log.Error().Msgf("unknow msg %v", req.MsgId)
			return
		}

		p.Logger().Debug().Any("msg", req).Msg("receive msg")
		h(p, req)
	})
}

func (s *GameServer) Init() {
	s.registerMsg()

	s.room = NewRoom(1, s)
	s.room.Init()
}

func (s *GameServer) Run() {
	go s.webSocket.ListenAndServe(fmt.Sprintf("%v:%v", config.ServerCfg.Ip, config.ServerCfg.Port))

	s.MainLoop()
}

func (s *GameServer) MainLoop() {
	tick := time.NewTicker(time.Duration(config.ServerCfg.TimerMinMs) * time.Millisecond)
	lastTime := time.Now()

	for {
		select {
		case <-s.quit:
			return
		case f, _ := <-s.taskChan:
			f()
		case t := <-tick.C:
			if t.Before(lastTime) { //时间回退
				lastTime = t
				break
			}

			diff := t.Sub(lastTime)
			s.loopTimer(diff)
		}
	}
}

func (s *GameServer) RunInMain(f func()) {
	s.pushTask(f)
}

func (s *GameServer) pushTask(f func()) {
	if f == nil {
		return
	}

	select {
	case s.taskChan <- f:
	default:
		log.Error().Msg("task chan is full")
	}
}

func (s *GameServer) runTask(f func()) {
	defer func() {
		if r := recover(); r != nil {
			log.Error().Interface("r", r).Msgf("write stop %v", string(debug.Stack()))
		}
	}()

	f()
}

func (s *GameServer) ScheduleTimer(f func(), interval time.Duration, once bool) *TimerInfo {
	tm := &TimerInfo{
		f:        f,
		once:     once,
		interval: interval,
		leftTime: interval,
		server:   s,
	}

	s.RunInMain(func() {
		s.addTimer(tm)
	})

	return tm
}

func (s *GameServer) addTimer(t *TimerInfo) {
	t.e = s.timerList.PushBack(t)
}

func (s *GameServer) UnScheduleTimer(t *TimerInfo) {
	if t.SetRemove() {
		s.RunInMain(func() {
			s.removeTimer(t)
		})
	}
}

func (s *GameServer) removeTimer(t *TimerInfo) {
	s.timerList.Remove(t.e)
	t.Clear()
}

func (s *GameServer) loopTimer(diff time.Duration) {
	var next *list.Element
	for it := s.timerList.Front(); it != nil; it = next {
		next = it.Next()

		t, _ := it.Value.(*TimerInfo)
		if t.leftTime > diff {
			t.leftTime -= diff
			continue
		}

		s.runTask(t.f)

		if t.once {
			s.removeTimer(t)
		} else {
			t.leftTime = t.interval
		}
	}
}

func (s *GameServer) OnConnConnect(client *network.WsClient) {

}

func (s *GameServer) OnConnClose(client *network.WsClient) {
	if p, ok := s.playerMap[client]; ok {
		s.onPlayerOffline(p)
		delete(s.playerMap, client)
	}
}
