import BaseModel from "./BaseModel";
import proto from "../network/proto/proto.js"
import { GameDef } from "../define/GameDef";
import { EventDef } from "../define/EventDef";

class GameModel extends BaseModel {
    _gameCfg: proto.gameconfig.IGameConfig = null;
    _roomId: (number|Long) = 0;
    _myPlayerId: (number|Long) = 0;
    _players = new Map<(number|Long), GameDef.Player>;

    _gameRunning: boolean = false;
    _curFrameNo: (number|Long) = 0;
    _frameOperateInfo = new Map<(number|Long), proto.msg.IOperateInfo[]>;

    public initModel(): void {
        
    }

    clearData() {
        this._roomId = 0;
        this._myPlayerId = 0;
        this._gameCfg = null;
        this._players.clear();

        this._gameRunning = false;
        this._curFrameNo = 0;
        this._frameOperateInfo.clear();
    }

    dealJoinRoomRspInfo(info: proto.msg.IJoinRsp) {
        this._roomId = info.roomId;
        this._myPlayerId = info.myPlayerId;
        this._gameCfg = info.gameCfg;
        
        for (let p of info.players) {
            this.setPlayerInfo(p);
        }
    }

    dealJoinRoomNtfInfo(info: proto.msg.IJoinNtf) {
        this.setPlayerInfo(info.player);
    }

    setPlayerInfo(info: proto.msg.IPlayerInfo) {
        if (this._players.has(info.playerId)) {
            this._players.get(info.playerId).gameInfo = info;
        } else {
            let player = new GameDef.Player();
            player.gameInfo = info;
            this._players.set(player.gameInfo.playerId, player);
        }
    }

    getPlayer(id: (number|Long)): GameDef.Player {
        return this._players.get(id);
    }

    getPlayerNoById(id: (number|Long)): number {
        let p = this.getPlayer(id)
        if (p) {
            return p.gameInfo.playerNo;
        }
        return 0;
    }

    dealQuitRoomRspInfo(info: proto.msg.IQuitRsp) {
        this.clearData();
    }

    dealQuitRoomNtfInfo(info: proto.msg.IQuitNtf) {
        this._players.delete(info.playerId);
    }

    dealGameStartInfo(info: proto.msg.IGameStartNtf) {
        this._gameRunning = true;
    }

    dealGameEndInfo(info: proto.msg.IGameEndNtf) {
        this._gameRunning = false;
    }

    dealOperateNtfInfo(info: proto.msg.IOperateNtf) {
        this.onLogicUpdate(info.op);

        this._curFrameNo = info.frameNo;
        this._frameOperateInfo.set(info.frameNo, info.op);
    }

    onLogicUpdate(op: proto.msg.IOperateInfo[]) {
        let frameMs = 1000 / this._gameCfg.frameCount;
        let moveDelta = frameMs*this._gameCfg.playerSpeed;

        //更新移动
        for (let it of op) {
            let plr = this.getPlayer(it.playerId);
            if (!plr) {
                continue;
            }

            //方向
            plr.gameInfo.moveDir = it.dir;

            //位置
            switch (it.dir) {
                case proto.msg.OperateDir.OD_UP:
                    plr.gameInfo.pos.y += moveDelta;
                    if (plr.gameInfo.pos.y > this._gameCfg.mapHeight) {
                        plr.gameInfo.pos.y = this._gameCfg.mapHeight;
                    }
                    break;
                case proto.msg.OperateDir.OD_LEFT:
                    plr.gameInfo.pos.x -= moveDelta;
                    if (plr.gameInfo.pos.x < 0) {
                        plr.gameInfo.pos.x = 0;
                    }
                    break;
                case proto.msg.OperateDir.OD_DOWN:
                    plr.gameInfo.pos.y -= moveDelta;
                    if (plr.gameInfo.pos.y < 0) {
                        plr.gameInfo.pos.y = 0;
                    }
                    break;
                case proto.msg.OperateDir.OD_RIGHT:
                    plr.gameInfo.pos.x += moveDelta;
                    if (plr.gameInfo.pos.x > this._gameCfg.mapWidth) {
                        plr.gameInfo.pos.x = this._gameCfg.mapWidth;
                    }
                    break;
                case proto.msg.OperateDir.OD_NULL:
                    break;
                default:
                    console.error("invalid op", it.dir);
                    break;
            }
        }

        this.emit(EventDef.EV_GAME_LOGIC_UPDATE);

        this.emit(EventDef.EV_GAME_OPE_UPLOAD);
    }

    isFrameSync() {
        return this._gameCfg && this._gameCfg.mode === proto.gameconfig.SyncMode.SM_FRAME;
    }
}

export default new GameModel()