package network

type MsgProcessor interface {
	UnMarshal(data []byte) (interface{}, error)
	Marshal(msg interface{}) ([]byte, error)
	Route(client *WsClient, msg interface{})
}
