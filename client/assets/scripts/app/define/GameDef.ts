import {Color, KeyCode, Vec2} from 'cc';
import proto from "../network/proto/proto.js"

export namespace GameDef {
    export const PLAYER_WIDTH = 40;
    export const PLAYER_HEIGHT = 40;

    //地图
    export const MAP_WIDTH = 1280;
    export const MAP_HEIGHT = 720;

    export class Player {
        gameInfo: proto.msg.IPlayerInfo;
    }

    export class GameKeyInfo {
        status: KeyCode;
        record: KeyCode;
    }

    export interface IGameConfig {
        mapWidth: number;
        mapHeight: number;
        playerWidth: number;
        playerHeight: number;
        playerSpeed: number;
    }
}