cc.Class({
    extends: cc.Component,

    properties: {
        ani: cc.Animation,
        count: -1
    },
    update(dt) { 
        console.log(this.count);
        if (this.count > -1 && this.count < 108) {
            this.node.x -= 25* dt;
            this.node.y -= 40 * dt;
            this.count++;
        }
        if (this.count >= 108) {
            this.ani.stop("Chicken_animation");
            this.node.color = new cc.Color(100, 0, 0);
        }
    },
});
