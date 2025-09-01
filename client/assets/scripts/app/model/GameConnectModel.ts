import BaseModel from "./BaseModel";
import { GameConnect } from "../network/GameConnect";
import CommonFunc from "../common/CommonFunc";
import { GameConfig } from "../GameConfig";
import proto from "../network/proto/proto.js"
import { common } from "protobufjs";
import GameModel from "./GameModel";

class GameConnectModel extends BaseModel {
    private _gameConnect: GameConnect = null;

    initModel() {
        this._gameConnect = new GameConnect("MainGame");
        this._gameConnect.setSocketErrorHandler(this.onSocketError.bind(this));
        this._gameConnect.setTimeOutHandler(this.onRequestTimeOut.bind(this));

        this.initNotifyHandler();//绑定消息通知处理
    }

    //初始化通知回调
    initNotifyHandler() {

    }

    registerNotifyHandler(requestID: number, handler: Function) {
        if (handler) {
            this._gameConnect.addNotifyHandler(requestID, handler)
        }
    }

    onSocketError() {
        console.log("GameConnectModel socket error!");
    }

    onRequestTimeOut() {
        console.log("GameConnectModel request timeout!");
    }

    /**
     * 连接服务器
     * @param callback 返回值：0-成功 1-连接失败 2-登录失败 3-已经登录 4-连接中 5-登录中
     */
    connectServer(callback: Function) {
        if (this._gameConnect.isConnecting()) {
            CommonFunc.excuteCallback(callback, 4);
            return;
        }

        let serverPort = GameConfig.serverPort;

        if (!this._gameConnect.isConnected()) {
            this._gameConnect.connect(GameConfig.serverIP, serverPort, (ret) => {
                if (ret) {
                    console.log("connect server ok!");
                    CommonFunc.excuteCallback(callback, 0);
                }
                else {
                    console.log("connect server failed!");
                    CommonFunc.excuteCallback(callback, 1);
                }
            });
        }
        else {
            CommonFunc.excuteCallback(callback, 3);
        }
    }

    //断开服务连接
    disconnectServer() {
        if (this._gameConnect.isConnected()) {
            this._gameConnect.disconnect();
        }
    }

    //服务是否连接
    isServerConnected(): boolean {
        return this._gameConnect.isConnected();
    }

    sendRequestWhenLogined(reqData: proto.msg.IBodyReq, needResponse: boolean = false, responseHandler: Function = null) {
        this.connectServer((ret: number, data) => {
            if (ret === 0 || ret === 3) {
                this._gameConnect.sendRequest(reqData, needResponse, responseHandler);
            }
        })
    }

    sendReqJoinRoom(handler: (status:proto.msg.StatusCode, rsp: proto.msg.IJoinRsp) => void) {
        let req : proto.msg.IBodyReq = {
            msgId: proto.msg.MsgId.MID_REQ_JOIN,
            joinReq: {},
        }
        
        this.sendRequestWhenLogined(req, true, (rsp: proto.msg.IBodyRsp) => {
            CommonFunc.showGameErrMsg(rsp);

            if (handler) {
                handler(rsp.status, rsp.joinRsp);
            }
        })
    }

     sendReqQuitRoom(handler: (status:proto.msg.StatusCode, rsp: proto.msg.IQuitRsp) => void) {
        let req : proto.msg.IBodyReq = {
            msgId: proto.msg.MsgId.MID_REQ_QUIT,
            quitReq: {},
        }
        
        this.sendRequestWhenLogined(req, true, (rsp: proto.msg.IBodyRsp) => {
            CommonFunc.showGameErrMsg(rsp);

            if (handler) {
                handler(rsp.status, rsp.quitRsp);
            }
        })
    }

    //简单处理，不需要响应
    sendReqOperate(dir: proto.msg.OperateDir) {
        let req : proto.msg.IBodyReq = {
            msgId: proto.msg.MsgId.MID_REQ_OPERATE,
            operateReq: {
                op: {
                    playerId: GameModel._myPlayerId,
                    dir: dir,
                }
            },
        }
        
        this.sendRequestWhenLogined(req, false)
    }

}

export default new GameConnectModel()