(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Car.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '08920u5/5tAo5J0kdPFVdp4', 'Car', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Car.js.map
        