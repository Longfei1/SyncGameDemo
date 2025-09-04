import { _decorator, tween, Tween } from 'cc';
import GameModel from '../../model/GameModel';
import CommonFunc from '../../common/CommonFunc';
import { Player } from './Player';
import { EventDef } from '../../define/EventDef';
const { ccclass, property } = _decorator;

@ccclass('StatePlayer')
export class StatePlayer extends Player {
    onLoad() {
        super.onLoad();

    }

    update(deltaTime: number) {
        
    }
}


