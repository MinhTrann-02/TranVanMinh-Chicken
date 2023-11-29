cc.Class({
    extends: cc.Component,

    properties: {
        car: cc.Sprite,
        speed: 0
    },

    update(dt) {
        this.node.x -= this.speed * dt;
    },
});
