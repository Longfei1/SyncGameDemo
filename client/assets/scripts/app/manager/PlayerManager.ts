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
    @property({ displayName: "帧同步玩家预制体", type: Prefab })
    prefabFramePlayer: Prefab = null;

    @property({ displayName: "状态同步玩家预制体", type: Prefab })
    prefabStatePlayer: Prefab = null;

    @property({ displayName: "玩家层级", type: Node })
    panelPlayer: Node = null;

    _nodePlayers = new Map<(number|Long), Node>;
    _curInputKey = new Map<(number|Long), GameDef.GameKeyInfo>;

    onLoad() {
        GameModel.addEventListener(EventDef.EV_GAME_JOIN_ROOM, this.evJoinRoom, this);
        GameModel.addEventListener(EventDef.EV_GAME_QUIT_ROOM, this.evQuitRoom, this);
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

    getPlayerPrefab(): Prefab {
        if (GameModel._gameCfg && GameModel._gameCfg.mode == proto.gameconfig.SyncMode.SM_STATE) {
            return this.prefabStatePlayer;
        }
        return this.prefabFramePlayer;
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
            node = instantiate(this.getPlayerPrefab());
            this.panelPlayer.addChild(node);
            this._nodePlayers.set(info.gameInfo.playerId, node);
        }
        
        let playerCom = node.getComponent(Player)
        playerCom.setPlayerId(info.gameInfo.playerId);
        playerCom.refreshView();
        playerCom.setPosition(info.gameInfo.pos);//初始位置

        this._curInputKey.set(info.gameInfo.playerId, new GameDef.GameKeyInfo())
    }

    removePlayer(id: (number|Long)) {
        let node = this._nodePlayers.get(id);
        if (!node) {
            return;
        }

        this._nodePlayers.delete(id);
        node.destroy();
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

    evLogicUpdateAfter() {
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


