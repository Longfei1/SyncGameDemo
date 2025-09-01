package network

import (
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/rs/zerolog/log"
	"net/http"
	"runtime/debug"
	"sync/atomic"
)

type WsClient struct {
	conn             *websocket.Conn
	msgProcessor     MsgProcessor
	connectProcessor ConnProcess

	writeChan chan interface{}
	close     atomic.Bool
}

func NewWsClient(conn *websocket.Conn, msgProcessor MsgProcessor, connectProcessor ConnProcess) *WsClient {
	return &WsClient{
		conn:             conn,
		msgProcessor:     msgProcessor,
		connectProcessor: connectProcessor,
		writeChan:        make(chan interface{}, 1000),
	}
}

type WebServer struct {
	upgrader     *websocket.Upgrader
	msgProcessor MsgProcessor
	connProcess  ConnProcess
}

func NewWebServer(msgProcessor MsgProcessor, connProcess ConnProcess) *WebServer {
	return &WebServer{
		upgrader: &websocket.Upgrader{
			ReadBufferSize:  8 * 1024,
			WriteBufferSize: 8 * 1024,
			CheckOrigin: func(r *http.Request) bool {
				return true
			},
		},
		msgProcessor: msgProcessor,
		connProcess:  connProcess,
	}
}

func (c *WsClient) read() {
	defer func() {
		if r := recover(); r != nil {
			log.Error().Interface("r", r).Msgf("read stop %v", string(debug.Stack()))
		}
	}()

	for {
		if c.close.Load() {
			break
		}

		// 读取客户端消息
		messageType, data, err := c.conn.ReadMessage()
		if err != nil {
			log.Error().Err(err).Msg("读取消息失败")
			c.Close()
			break
		}

		if messageType == websocket.BinaryMessage {
			if c.msgProcessor != nil {
				msg, err := c.msgProcessor.UnMarshal(data)
				if err != nil {
					log.Error().Err(err).Msg("UnMarshal failed")
					continue
				}

				c.msgProcessor.Route(c, msg)
			}
		}
	}
}

func (c *WsClient) write() {
	defer func() {
		if r := recover(); r != nil {
			log.Error().Interface("r", r).Msgf("write stop %v", string(debug.Stack()))
		}
	}()

	for {
		if c.close.Load() {
			break
		}

		select {
		case message, ok := <-c.writeChan:
			if !ok {
				break
			}

			if c.msgProcessor != nil {
				data, err := c.msgProcessor.Marshal(message)
				if err != nil {
					log.Error().Err(err).Msg("Marshal failed")
					continue
				}

				err = c.conn.WriteMessage(websocket.BinaryMessage, data)
				if err != nil {
					log.Error().Err(err).Send()
					continue
				}
			}
		}
	}
}

func (c *WsClient) SendMsg(msg interface{}) error {
	if c.close.Load() {
		return fmt.Errorf("conn already close")
	}

	select {
	case c.writeChan <- msg:
	default:
		log.Error().Msg("write chan full")
		return fmt.Errorf("write chan full")
	}
	return nil
}

func (c *WsClient) Close() {
	if !c.close.CompareAndSwap(false, true) {
		return
	}

	close(c.writeChan)
	c.conn.Close()
	log.Debug().Msgf("conn close %v", c.conn.RemoteAddr())

	if c.connectProcessor != nil {
		c.connectProcessor.OnConnClose(c)
	}
}

func (s *WebServer) wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := s.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Error().Err(err).Msg("升级连接失败")
		return
	}

	wsCon := NewWsClient(conn, s.msgProcessor, s.connProcess)

	log.Debug().Msgf("new conn addr:%v", conn.RemoteAddr())
	go wsCon.read()
	go wsCon.write()

	if s.connProcess != nil {
		s.connProcess.OnConnConnect(wsCon)
	}
}

func (s *WebServer) ListenAndServe(addr string) {
	http.HandleFunc("/", s.wsHandler)
	log.Info().Msgf("web server run %v", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatal()
	}
}
