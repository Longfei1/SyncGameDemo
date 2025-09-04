import { _decorator, Component, Node, game } from 'cc';
import ModelManager from '../../manager/ModelManager';
import GameConnectModel from '../../model/GameConnectModel';
import CommonFunc from '../../common/CommonFunc';
import proto, { gameconfig } from "../../network/proto/proto.js"
import GameModel from '../../model/GameModel';
import { EventDef } from '../../define/EventDef';
import { GameConfig } from '../../GameConfig';

const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property({ displayName: "加入按钮", type: Node })
    btnJoin: Node = null;

    @property({ displayName: "退出按钮", type: Node })
    btnQuit: Node = null;

    onLoad() {
        game.frameRate = GameConfig.frameRate;

        ModelManager.initModels();

        this.registerNetHandler();

        this.showMainMenu();
    }

    onDestroy() {
    
    }

    start() {
        GameConnectModel.connectServer((ret: number) => {
            if (ret != 0) {
                CommonFunc.showToast(`网络连接错误！，错误码：${ret}`)
            }
        })
    }

    registerNetHandler() {
        GameConnectModel.registerNotifyHandler(proto.msg.MsgId.MID_NTF_JOIN, this.onNtfJoinRoom);
        GameConnectModel.registerNotifyHandler(proto.msg.MsgId.MID_NTF_QUIT, this.onNtfQuitRoom);
        GameConnectModel.registerNotifyHandler(proto.msg.MsgId.MID_NTF_GAME_START, this.onNtfGameStart);
        GameConnectModel.registerNotifyHandler(proto.msg.MsgId.MID_NTF_GAME_END, this.onNtfGameEnd);
        GameConnectModel.registerNotifyHandler(proto.msg.MsgId.MID_NTF_OPERATE, this.onNtfOperate);
    }

    update(deltaTime: number) {
        
    }

    onBtnJoin() {
        GameConnectModel.sendReqJoinRoom((status:proto.msg.StatusCode, rsp: proto.msg.IJoinRsp) => {
            if (status != proto.msg.StatusCode.SC_SUCCESS) {
                return
            }

            this.hideMainMenu();

            GameModel.dealJoinRoomRspInfo(rsp)
            GameModel.emit(EventDef.EV_GAME_JOIN_ROOM, rsp.myPlayerId, true);
        })
    }

    onNtfJoinRoom(body: proto.msg.BodyRsp) {
        GameModel.dealJoinRoomNtfInfo(body.joinNtf);
        GameModel.emit(EventDef.EV_GAME_JOIN_ROOM, body.joinNtf.player.playerId, false);
    }

    showMainMenu() {
        this.btnJoin.active = true;
        this.btnQuit.active = false;
    }

    hideMainMenu() {
        this.btnJoin.active = false
        this.btnQuit.active = true;
    }

    onBtnQuit() {
         GameConnectModel.sendReqQuitRoom((status:proto.msg.StatusCode, rsp: proto.msg.IQuitRsp) => {
            if (status != proto.msg.StatusCode.SC_SUCCESS) {
                return;
            }

            this.showMainMenu();

            let myPlayerId = GameModel._myPlayerId;
            GameModel.dealQuitRoomRspInfo(rsp);
            GameModel.emit(EventDef.EV_GAME_QUIT_ROOM, myPlayerId, true);
        })
    }

    onNtfQuitRoom(body: proto.msg.BodyRsp) {
        GameModel.dealQuitRoomNtfInfo(body.quitNtf);
        GameModel.emit(EventDef.EV_GAME_QUIT_ROOM, body.quitNtf.playerId, false);
    }

    onNtfGameStart(body: proto.msg.BodyRsp) {
        GameModel.dealGameStartInfo(body.gameStartNtf);
        GameModel.emit(EventDef.EV_GAME_START);
    }

    onNtfGameEnd(body: proto.msg.BodyRsp) {
        GameModel.dealGameEndInfo(body.gameEndNtf);
        GameModel.emit(EventDef.EV_GAME_END);
    }

    onNtfOperate(body: proto.msg.BodyRsp) {
        GameModel.dealOperateNtfInfo(body.operateNtf);
    }
}
