import { _decorator, Component, EventKeyboard, instantiate, KeyCode, Node, Prefab, tween, Tween } from 'cc';
import GameModel from '../model/GameModel';
import { EventDef } from '../define/EventDef';
import CommonFunc from '../common/CommonFunc';
import { Player } from '../component/game/Player';
import { GameDef } from '../define/GameDef';
import GameInputModel from '../model/GameInputModel';
import GameConnectModel from '../model/GameConnectModel';
import proto from "../network/proto/proto.js"
const { ccclass, property } = _decorator;

@ccclass('PlayerManager')
export class PlayerManager extends Component {
    @property({ displayName: "玩家预制体", type: Prefab })
    prefabPlayer: Prefab = null;

    @property({ displayName: "玩家层级", type: Node })
    panelPlayer: Node = null;

    _nodePlayers = new Map<(number|Long), Node>;
    _curInputKey = new Map<(number|Long), GameDef.GameKeyInfo>;

    onLoad() {
        GameModel.addEventListener(EventDef.EV_GAME_JOIN_ROOM, this.evJoinRoom, this);
        GameModel.addEventListener(EventDef.EV_GAME_QUIT_ROOM, this.evQuitRoom, this);
        GameModel.addEventListener(EventDef.EV_GAME_LOGIC_UPDATE_BEFORE, this.evLogicUpdateBefore, this);
        GameModel.addEventListener(EventDef.EV_GAME_LOGIC_UPDATE_BEFORE, this.evLogicUpdateAfter, this);

        GameInputModel.addKeyDownOnceListener(this.onInputKeyDown, this.onInputKeyUp, this);
        GameInputModel.addInputHierarchy(true, this);
    }

    onDestroy() {
        GameModel.removeEventListenerByContext(this);
        GameInputModel.removeInputListenerByContext(this);
        GameInputModel.removeInputHierarchy(this);
    }

    start() {

    }

    update(deltaTime: number) {
        if (!GameModel._gameRunning) {
            return;
        } 
    }

    clearData() {
        this._nodePlayers.clear();
        this._curInputKey.clear();
    }

    onInputKeyDown(event: EventKeyboard) {
        if (!GameModel._gameRunning) {
            return;
        }

        switch(event.keyCode) {
            case KeyCode.KEY_W:
            case KeyCode.KEY_S:
            case KeyCode.KEY_A:
            case KeyCode.KEY_D:
                if (GameModel._myPlayerId != 0) {
                    this._curInputKey.get(GameModel._myPlayerId).status = event.keyCode;
                    this._curInputKey.get(GameModel._myPlayerId).record = event.keyCode;
                }
                break;
            default:
                break;
        }
    }

    onInputKeyUp(event: EventKeyboard) {
        if (!GameModel._gameRunning) {
            return;
        }

        switch(event.keyCode) {
            case KeyCode.KEY_W:
            case KeyCode.KEY_S:
            case KeyCode.KEY_A:
            case KeyCode.KEY_D:
                if (GameModel._myPlayerId != 0) {        
                    //相同键抬起时，才重置按键状态
                    if (this._curInputKey.get(GameModel._myPlayerId).status === event.keyCode) {
                        this._curInputKey.get(GameModel._myPlayerId).status = KeyCode.NONE;
                    }
                }
                break;
            default:
                break;
        }
    }

    resetInputKeyRecord() {
        for (let it of this._curInputKey.values()) {
            it.record = KeyCode.NONE;
        }
    }

    evJoinRoom(id: (number|Long), bSelf: boolean) {
        if (bSelf) {
            this.node.active = true;
        }

        for (const p of GameModel._players.values()) {
            this.addPlayer(p);
        }
    }

    addPlayer(info: GameDef.Player) {
        //已存在时，不重复添加
        let node = this._nodePlayers.get(info.gameInfo.playerId);
        if (!node) {
            node = instantiate(this.prefabPlayer);
            this.panelPlayer.addChild(node);
            this._nodePlayers.set(info.gameInfo.playerId, node);
        }
        
        let playerCom = node.getComponent(Player)
        node.setPosition(CommonFunc.positionInfo2Vec3(info.gameInfo.pos));
        playerCom.setImg(CommonFunc.colorInfo2Cc(info.gameInfo.color))
        playerCom.setName(info.gameInfo.playerId.toString());
        playerCom.setSelfTag(info.gameInfo.playerId == GameModel._myPlayerId);

        this._curInputKey.set(info.gameInfo.playerId, new GameDef.GameKeyInfo())
    }

    removePlayer(id: (number|Long)) {
        let node = this._nodePlayers.get(id);
        if (!node) {
            return;
        }

        node.removeFromParent();
    }

    evQuitRoom(id: (number|Long), bSelf: boolean) {
        if (bSelf) {
            this.panelPlayer.removeAllChildren();

            this.clearData();
            this.node.active = false;
            return;
        }

        this.removePlayer(id);
    }

    evLogicUpdateBefore() {
        //设置当前位置
        for (let plr of GameModel._players.values()) {
            let node = this._nodePlayers.get(plr.gameInfo.playerId);
            if (!node) {
                continue;
            }

            //Tween.stopAllByTarget(node);
            //node.setPosition(CommonFunc.positionInfo2Vec3(plr.gameInfo.pos));
        }
    }

    evLogicUpdateAfter() {
        let frameSec = 1 / (GameModel._gameCfg.frameCount - 1);

        for (let plr of GameModel._players.values()) {
            let node = this._nodePlayers.get(plr.gameInfo.playerId);
            if (!node) {
                continue;
            }

            let curPos = node.getPosition();
            let nextPos = CommonFunc.positionInfo2Vec3(plr.gameInfo.pos);

            if (curPos.x != nextPos.x || curPos.y != nextPos.y) {
                tween(node)
                .to(frameSec, {position: nextPos})
                .start();
            }
        }


        this.doUploadInput();
    }

    doUploadInput() {
        let inputInfo = this._curInputKey.get(GameModel._myPlayerId);
        let code = inputInfo.status;
        if (code == KeyCode.NONE) {
            code = inputInfo.record;
        }

        GameConnectModel.sendReqOperate(CommonFunc.inputKey2OperateDir(code));

        this.resetInputKeyRecord();
    }
}


