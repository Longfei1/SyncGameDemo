import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property({ displayName: "图片", type: Sprite })
    image: Sprite = null;

    @property({ displayName: "名字", type: Label })
    labelName: Label = null;

    @property({ displayName: "自我标记", type: Node })
    nodeSelfTag: Node = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    setImg(color: Color) {
        this.image.color = color
    }

    setName(name: string) {
        this.labelName.string = name;
    }

    setSelfTag(self: boolean) {
        this.nodeSelfTag.active = self;
    }
}


