package server

import (
	"GameServer/msg"
	"GameServer/src/network"
	"fmt"
	"github.com/rs/zerolog/log"
	"google.golang.org/protobuf/proto"
)

type ProtobufProcessor struct {
	server *GameServer
}

func NewProtobufProcessor(server *GameServer) *ProtobufProcessor {
	return &ProtobufProcessor{
		server: server,
	}
}

func (h *ProtobufProcessor) UnMarshal(data []byte) (interface{}, error) {
	req := &msg.BodyReq{}
	err := proto.Unmarshal(data, req)
	if err != nil {
		return nil, err
	}
	return req, nil
}

func (h *ProtobufProcessor) Marshal(m interface{}) ([]byte, error) {
	rsp, ok := m.(*msg.BodyRsp)
	if !ok {
		log.Error().Msg("msg type err")
		return nil, fmt.Errorf("msg type invalid")
	}

	return proto.Marshal(rsp)
}

func (h *ProtobufProcessor) Route(client *network.WsClient, m interface{}) {
	if client == nil {
		log.Error().Msg("client is nil")
		return
	}

	req, ok := m.(*msg.BodyReq)
	if !ok {
		log.Error().Msg("msg type err")
		return
	}

	h.server.RouteMsg(client, req)
}

func (h *ProtobufProcessor) OnConnect(client *network.WsClient) {

}

func (h *ProtobufProcessor) OnClose(client *network.WsClient) {

}
