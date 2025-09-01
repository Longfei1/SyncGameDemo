import { assetManager, Component, director, Node, Prefab, instantiate, UIComponent, UITransform, Vec3, Color, KeyCode } from 'cc';
import { Toast } from '../component/common/Toast';
import proto from "../network/proto/proto.js"
import { ErrorDef } from '../define/ErrorDef';

const InputKey2OperateDir = {
    [KeyCode.NONE]: proto.msg.OperateDir.OD_NULL,
    [KeyCode.KEY_W]: proto.msg.OperateDir.OD_UP,
    [KeyCode.KEY_A]: proto.msg.OperateDir.OD_LEFT,
    [KeyCode.KEY_S]: proto.msg.OperateDir.OD_DOWN,
    [KeyCode.KEY_D]: proto.msg.OperateDir.OD_RIGHT,
}

export default class CommonFunc {
    static copyObject(object): any {
        return JSON.parse(JSON.stringify(object));
    }

    static excuteCallback(callback: Function, ...params) {
        if (callback) {
            return callback(...params);
        }
    }

    static pbEncode(obj: any, pbHandler: any): ArrayBuffer {
        let msg = pbHandler.create(obj);
        let dataEncode = pbHandler.encode(msg).finish();
        return dataEncode;
    }

    static pbDecode(buf: ArrayBuffer, pbHandler: any): any {
        let dataDecode = pbHandler.decode(new Uint8Array(buf));
        return dataDecode;
    }

    /**
     * Toast提示
     * @param tipString 提示字符
     * @param time 停留时间
     */
    static showToast(tipString:string, time?: number) {
        assetManager.resources.load("prefab/Toast", Prefab, (error, pfb) => {
            if (!error) {
                let root = director.getScene().getChildByName("Canvas");
                let node = instantiate(pfb);
                if (root && node) {
                    node.getComponent(Toast).init({
                        tipString: tipString,
                        time: time,
                    })
                    node.y = -10;
                    root.addChild(node);
                    node.setSiblingIndex(root.children.length - 1);
                }
            }
        });
    }

    static showGameErrMsg(rsp: proto.msg.IBodyRsp): boolean {
        if (!rsp) {
            return false
        }

        if (rsp.status === proto.msg.StatusCode.SC_SUCCESS) {
            return false
        }

        console.warn("net rsp failed,", rsp.status, rsp.errorMsg);

        let tipMsg = ""
        if (rsp.status in ErrorDef) {
            tipMsg = ErrorDef[rsp.status]
        } else {
            tipMsg = `未知错误：${rsp.status}`
        }

        this.showToast(tipMsg)
        return true
    }

    static positionInfo2Vec3(pos: proto.gameconfig.IPositionInfo): Vec3 {
        return new Vec3(pos.x, pos.y, 0);
    }

    static colorInfo2Cc(c: proto.gameconfig.IColorInfo): Color {
        return new Color(c.r, c.g, c.b);
    }

    static inputKey2OperateDir(k: KeyCode): proto.msg.OperateDir {
        if (k in InputKey2OperateDir) {
            return InputKey2OperateDir[k]
        }
        return proto.msg.OperateDir.OD_NULL;
    }
}