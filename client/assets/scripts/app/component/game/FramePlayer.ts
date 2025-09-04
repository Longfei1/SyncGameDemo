import { _decorator, tween, Tween } from 'cc';
import GameModel from '../../model/GameModel';
import CommonFunc from '../../common/CommonFunc';
import { Player } from './Player';
import { EventDef } from '../../define/EventDef';
const { ccclass, property } = _decorator;

@ccclass('FramePlayer')
export class FramePlayer extends Player {
    onLoad() {
        super.onLoad();

        GameModel.addEventListener(EventDef.EV_GAME_LOGIC_UPDATE_BEFORE, this.evLogicUpdateBefore, this);
        GameModel.addEventListener(EventDef.EV_GAME_LOGIC_UPDATE_BEFORE, this.evLogicUpdateAfter, this);
    }

    onDestroy() {
        GameModel.removeEventListenerByContext(this);
    }

    update(deltaTime: number) {
        
    }

    evLogicUpdateBefore() {
        //设置当前位置
        let plr = this.getPlayer();

        //Tween.stopAllByTarget(node);
        //this.node.setPosition(CommonFunc.positionInfo2Vec3(plr.gameInfo.pos));
    }

    evLogicUpdateAfter() {
        let frameSec = 1 / (GameModel._gameCfg.frameCount - 1);

        let plr = this.getPlayer();
      
        let curPos = this.node.getPosition();
        let nextPos = CommonFunc.positionInfo2Vec3(plr.gameInfo.pos);

        if (curPos.x != nextPos.x || curPos.y != nextPos.y) {
            tween(this.node)
            .to(frameSec, {position: nextPos})
            .start();
        }
    }
}


