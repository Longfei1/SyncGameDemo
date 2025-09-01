import { _decorator, Component, Node, Label, UITransform, UIOpacity, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends Component {
    @property({ displayName: "背景", type: Node })
    nodeBg: Node = null;

    @property({ displayName: "提示文本", type: Label })
    txtTip: Label = null;

    _time: number = 1;

    start() {
        this.showTip();  
    }

    init(param) {
        if (param) {
            this.txtTip.string = param.tipString ? param.tipString : "";
            this._time = param.time ? param.time : 1;
        }
    }

    showTip() {
        let bgTransform = this.nodeBg.getComponent(UITransform);
        let tipTransform = this.txtTip.getComponent(UITransform)
        // 方法一
        bgTransform.height = tipTransform.height + 20;
        
        this.txtTip.node.y = this.txtTip.node.y - 2;

        let opacity = this.getComponent(UIOpacity);
        opacity.opacity = 0

        tween(opacity)
            .to(0.2, {opacity: 255}, {easing: 'sineIn'})
            .delay(Math.max(this._time - 0.4, 0))  // 确保延时非负
            .to(0.2, {opacity: 0 }, {easing: 'sineOut'})
            .call(() => this.node.destroy())
            .start();
    }
}


