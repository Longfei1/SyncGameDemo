package server

import (
	"GameServer/msg"
	"GameServer/src/common/errors"
	"GameServer/src/config"
	"sort"
	"time"
)

type Room struct {
	id     uint64
	server *GameServer

	players map[*Player]interface{}

	frameSyncTimer *TimerInfo
	frameNo        uint64
	frameRecord    map[uint64][]*msg.OperateInfo
}

func NewRoom(id uint64, server *GameServer) *Room {
	return &Room{
		id:          id,
		server:      server,
		players:     make(map[*Player]interface{}),
		frameRecord: make(map[uint64][]*msg.OperateInfo),
	}
}

func (r *Room) resetRoom() {
	r.frameNo = 0
	r.frameRecord = make(map[uint64][]*msg.OperateInfo)

	r.stopFrameSyncTimer()
}

func (r *Room) genPlayerNo() (uint32, errors.Error) {
	for i := 1; i <= int(config.GameCfg.MaxPlayerCount); i++ {
		find := false
		for p := range r.players {
			if p.gameInfo.PlayerNo == uint32(i) {
				find = true
				break
			}
		}

		if !find {
			return uint32(i), nil
		}
	}
	return 0, errors.NewMsgError(msg.StatusCode_SC_ROOM_FULL, "room full")
}

func (r *Room) EnterRoom(p *Player) errors.Error {
	if r.IsInRoom(p) {
		return errors.NewMsgError(msg.StatusCode_SC_ALEADY_IN_ROOM, "in room")
	}

	playerNo, err := r.genPlayerNo()
	if err != nil {
		return err
	}

	if playerNo-1 < uint32(len(config.GameCfg.PlayerPos)) {
		p.gameInfo.Pos = config.GameCfg.PlayerPos[playerNo-1]
	} else {
		return errors.NewMsgError(msg.StatusCode_SC_CONFIG_ERROR, "pos config invalid")
	}

	if playerNo-1 < uint32(len(config.GameCfg.PlayerColor)) {
		p.gameInfo.Color = config.GameCfg.PlayerColor[playerNo-1]
	} else {
		return errors.NewMsgError(msg.StatusCode_SC_CONFIG_ERROR, "color config invalid")
	}

	p.gameInfo.PlayerNo = playerNo
	r.players[p] = nil

	r.NtfMsg(msg.MsgId_MID_NTF_JOIN, &msg.BodyRsp_JoinNtf{
		JoinNtf: &msg.JoinNtf{
			Player: p.gameInfo,
		}}, p)

	return nil
}

func (r *Room) IsInRoom(p *Player) bool {
	_, ok := r.players[p]
	return ok
}

func (r *Room) GetPlayerCount() uint32 {
	return uint32(len(r.players))
}

func (r *Room) GetPlayersInfo() []*msg.PlayerInfo {
	players := make([]*msg.PlayerInfo, 0, len(r.players))
	for p := range r.players {
		players = append(players, p.gameInfo)
	}
	sort.Slice(players, func(i, j int) bool {
		return players[i].PlayerNo < players[i].PlayerNo
	})
	return players
}

func (r *Room) LeaveRoom(p *Player) errors.Error {
	if !r.IsInRoom(p) {
		return errors.NewMsgError(msg.StatusCode_SC_FAILED, "not in room")
	}

	delete(r.players, p)

	r.NtfMsg(msg.MsgId_MID_NTF_QUIT, &msg.BodyRsp_QuitNtf{
		QuitNtf: &msg.QuitNtf{
			PlayerId: p.id,
		}}, p)

	if r.GetPlayerCount() == 0 {
		r.resetRoom()
	}

	return nil
}

func (r *Room) NtfMsg(msgId msg.MsgId, ntf interface{}, except *Player, option ...MsgOption) {
	for p, _ := range r.players {
		if p == except {
			continue
		}

		_ = p.SendMsg(msgId, ntf, option...)
	}
}

func (r *Room) Init() {
	//r.initTimer()
}

func (r *Room) startFrameSyncTimer() {
	r.stopFrameSyncTimer()

	r.frameSyncTimer = r.server.ScheduleTimer(r.updateFrame,
		time.Second/time.Duration(config.GameCfg.FrameCount), false)
}

func (r *Room) stopFrameSyncTimer() {
	if r.frameSyncTimer != nil {
		r.frameSyncTimer.UnSchedule()
		r.frameSyncTimer = nil
	}
}

func (r *Room) updateFrame() {
	r.frameNo++

	//收集操作
	for p := range r.players {
		if p.operateInfo != nil {
			r.frameRecord[r.frameNo] = append(r.frameRecord[r.frameNo], p.operateInfo)
		}
	}

	//同步操作
	ntf := &msg.BodyRsp_OperateNtf{OperateNtf: &msg.OperateNtf{
		FrameNo: r.frameNo,
		Op:      r.frameRecord[r.frameNo],
	}}
	r.NtfMsg(msg.MsgId_MID_NTF_OPERATE, ntf, nil)
}

func (r *Room) gameStart() {
	if config.IsFrameSync() {
		r.startFrameSyncTimer()
	}

	r.NtfMsg(msg.MsgId_MID_NTF_GAME_START, &msg.BodyRsp_GameStartNtf{GameStartNtf: &msg.GameStartNtf{}}, nil)
}

func (r *Room) gameEnd() {
	if config.IsFrameSync() {
		r.stopFrameSyncTimer()
	}
	r.NtfMsg(msg.MsgId_MID_NTF_GAME_END, &msg.BodyRsp_GameEndNtf{GameEndNtf: &msg.GameEndNtf{}}, nil)
}
