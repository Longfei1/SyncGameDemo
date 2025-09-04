import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import GameModel from '../../model/GameModel';
import CommonFunc from '../../common/CommonFunc';
import { GameDef } from '../../define/GameDef';
import proto from "../../network/proto/proto.js"
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property({ displayName: "图片", type: Sprite })
    image: Sprite = null;

    @property({ displayName: "名字", type: Label })
    labelName: Label = null;

    @property({ displayName: "自我标记", type: Node })
    nodeSelfTag: Node = null;

    _playerId: (number|Long) = 0;

    onLoad() {

    }

    update(deltaTime: number) {
        
    }

    setPosition(pos: proto.gameconfig.IPositionInfo) {
        this.node.setPosition(CommonFunc.positionInfo2Vec3(pos));
    }

    setImg(color: proto.gameconfig.IColorInfo) {
        this.image.color = CommonFunc.colorInfo2Cc(color);
    }

    setName(name: string) {
        this.labelName.string = name;
    }

    setSelfTag(self: boolean) {
        this.nodeSelfTag.active = self;
    }

    setPlayerId(id: (number|Long)) {
        this._playerId = id;
    }

    getPlayer(): GameDef.Player {
        return GameModel.getPlayer(this._playerId);
    }

    refreshView() {
        let info = this.getPlayer();
        if (!info) {
            return;
        }

        this.setImg(info.gameInfo.color);
        this.setName(info.gameInfo.playerId.toString());
        this.setSelfTag(info.gameInfo.playerId == GameModel._myPlayerId);
    }
}


