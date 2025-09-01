package server

import (
	"GameServer/msg"
	"GameServer/src/common/errors"
)

type MsgOptions struct {
	MsgId  msg.MsgId
	Seq    uint64
	Status msg.StatusCode
	ErrMsg string
}

func NewMsgOptions(op ...MsgOption) *MsgOptions {
	options := &MsgOptions{} //默认值

	for _, f := range op {
		f(options)
	}
	return options
}

type MsgOption func(*MsgOptions)

func WithSeq(seq uint64) MsgOption {
	return func(options *MsgOptions) {
		options.Seq = seq
	}
}

func WithStatus(status msg.StatusCode) MsgOption {
	return func(options *MsgOptions) {
		options.Status = status
	}
}

func WithErrorMsg(e errors.Error) MsgOption {
	return func(options *MsgOptions) {
		if e != nil {
			options.Status = e.ErrorCode()
			options.ErrMsg = e.Error()
		}
	}
}

func WithReqBody(body *msg.BodyReq) MsgOption {
	return func(options *MsgOptions) {
		options.MsgId = body.MsgId + 10000
		options.Seq = body.Seq
	}
}
