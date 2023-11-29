"use strict";
cc._RF.push(module, '08920u5/5tAo5J0kdPFVdp4', 'Car');
// Script/Car.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        car: cc.Sprite,
        speed: 0
    },

    update: function update(dt) {
        this.node.x -= this.speed * dt;
    }
});

cc._RF.pop();