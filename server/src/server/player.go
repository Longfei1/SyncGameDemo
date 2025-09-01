package server

import (
	"GameServer/msg"
	"GameServer/src/network"
	"fmt"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"reflect"
)

type Player struct {
	client *network.WsClient

	id          uint64
	gameInfo    *msg.PlayerInfo
	operateInfo *msg.OperateInfo

	logger zerolog.Logger
}

func NewPlayer(id uint64, client *network.WsClient) *Player {
	p := &Player{
		id: id,
		gameInfo: &msg.PlayerInfo{
			PlayerId: id,
		},
		client: client,
	}
	p.UpdateLogger()
	return p
}

func (p *Player) SendMsg(id msg.MsgId, rsp interface{}, option ...MsgOption) error {
	options := NewMsgOptions(option...)

	rspBody := &msg.BodyRsp{MsgId: id}
	if options.MsgId > msg.MsgId_MID_NULL {
		rspBody.MsgId = options.MsgId
	}
	if options.Status > msg.StatusCode_SC_SUCCESS {
		rspBody.Status = options.Status
	}
	if options.Seq > 0 {
		rspBody.Seq = options.Seq
	}

	if rsp != nil {
		rv := reflect.ValueOf(rspBody)
		rvBody := rv.Elem().FieldByName("Body")
		if !reflect.TypeOf(rsp).Implements(rvBody.Type()) {
			return fmt.Errorf("require oneof msg.Body")
		}

		rvBody.Set(reflect.ValueOf(rsp))
	}

	err := p.client.SendMsg(rspBody)
	p.Logger().Debug().Any("msg", rspBody).Err(err).Msg("send msg")
	return err
}

func (p *Player) SendResponse(req *msg.BodyReq, rsp interface{}, option ...MsgOption) error {
	return p.SendMsg(msg.MsgId_MID_NULL, rsp, append(option, WithReqBody(req))...)
}

func (p *Player) Logger() *zerolog.Logger {
	return &p.logger
}

func (p *Player) UpdateLogger() {
	p.logger = log.With().Uint64("playerId", p.id).Logger()
}
