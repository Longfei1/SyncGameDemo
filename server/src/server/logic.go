package server

import (
	"GameServer/msg"
	"GameServer/src/common/errors"
	"GameServer/src/config"
)

func (s *GameServer) HandleConnectPlus(p *Player, req *msg.BodyReq) {
	_ = p.SendResponse(req, nil)
}

func (s *GameServer) HandleJoin(p *Player, req *msg.BodyReq) {
	rsp, err := s.handleJoin_(p, req)
	_ = p.SendResponse(req, rsp, WithErrorMsg(err))

	if s.room.GetPlayerCount() == config.GameCfg.MaxPlayerCount {
		s.room.gameStart()
	}

}

func (s *GameServer) handleJoin_(p *Player, req *msg.BodyReq) (rsp *msg.BodyRsp_JoinRsp, err errors.Error) {
	if err = s.room.EnterRoom(p); err != nil {
		return
	}

	rsp = &msg.BodyRsp_JoinRsp{JoinRsp: &msg.JoinRsp{
		GameCfg:    config.GameCfg,
		RoomId:     s.room.id,
		MyPlayerId: p.id,
		Players:    s.room.GetPlayersInfo(),
	}}
	return
}

func (s *GameServer) HandleQuit(p *Player, req *msg.BodyReq) {
	rsp, err := s.handleQuit_(p, req)
	_ = p.SendResponse(req, rsp, WithErrorMsg(err))

	if s.room.GetPlayerCount() == config.GameCfg.MaxPlayerCount-1 {
		s.room.gameEnd()
	}
}

func (s *GameServer) handleQuit_(p *Player, req *msg.BodyReq) (rsp *msg.BodyRsp_QuitRsp, err errors.Error) {
	if err = s.room.LeaveRoom(p); err != nil {
		return
	}

	rsp = &msg.BodyRsp_QuitRsp{QuitRsp: &msg.QuitRsp{}}
	return
}

func (s *GameServer) HandlerOperate(p *Player, req *msg.BodyReq) {
	rsp, err := s.handlerOperate_(p, req)
	_ = p.SendResponse(req, rsp, WithErrorMsg(err))
}

func (s *GameServer) handlerOperate_(p *Player, req *msg.BodyReq) (rsp *msg.BodyRsp_OperateRsp, err errors.Error) {
	if !s.room.IsInRoom(p) {
		err = errors.NewMsgError(msg.StatusCode_SC_FAILED, "not in room")
		return
	}

	op := req.GetOperateReq()
	if op == nil || op.Op == nil {
		err = errors.NewMsgError(msg.StatusCode_SC_PARAM_ERROR, "")
		return
	}

	if config.IsFrameSync() {
		//帧同步，人不满不能操作
		if s.room.GetPlayerCount() != config.GameCfg.MaxPlayerCount {
			err = errors.NewMsgError(msg.StatusCode_SC_FAILED, "player not enough")
			return
		}

		p.operateInfo = op.Op
		p.operateInfo.PlayerId = p.id
	}

	rsp = &msg.BodyRsp_OperateRsp{OperateRsp: &msg.OperateRsp{}}
	return
}

func (s *GameServer) onPlayerOffline(p *Player) {
	p.Logger().Info().Msg("offline")

	if s.room.IsInRoom(p) {
		_ = s.room.LeaveRoom(p)
		if s.room.GetPlayerCount() == config.GameCfg.MaxPlayerCount-1 {
			s.room.gameEnd()
		}
	}
}
