package errors

import "GameServer/msg"

type Error interface {
	ErrorCode() msg.StatusCode
	Error() string
}

type MsgError struct {
	code msg.StatusCode
	msg  string
}

func NewMsgError(code msg.StatusCode, m string) *MsgError {
	return &MsgError{
		code: code,
		msg:  m,
	}
}

func ToMsgError(code msg.StatusCode, err error) *MsgError {
	s := ""
	if err != nil {
		s = err.Error()
	}

	return &MsgError{
		code: code,
		msg:  s,
	}
}

func (e *MsgError) ErrorCode() msg.StatusCode {
	return e.code
}

func (e *MsgError) Error() string {
	return e.msg
}
