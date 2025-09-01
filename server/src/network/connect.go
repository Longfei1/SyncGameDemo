package network

type ConnProcess interface {
	OnConnConnect(client *WsClient)
	OnConnClose(client *WsClient)
}
