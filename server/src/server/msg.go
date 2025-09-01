package server

import (
	"GameServer/msg"
)

func (s *GameServer) registerMsg() {
	s.msgRoute[msg.MsgId_MID_REQ_CONNECT_PLUSE] = s.HandleConnectPlus
	s.msgRoute[msg.MsgId_MID_REQ_JOIN] = s.HandleJoin
	s.msgRoute[msg.MsgId_MID_REQ_QUIT] = s.HandleQuit
	s.msgRoute[msg.MsgId_MID_REQ_OPERATE] = s.HandlerOperate
}
