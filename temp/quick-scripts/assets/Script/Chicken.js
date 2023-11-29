(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Chicken.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '58b90j8/WNFJrv4leKJsQiR', 'Chicken', __filename);
// Script/Chicken.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        ani: cc.Animation,
        count: -1
    },
    update: function update(dt) {
        console.log(this.count);
        if (this.count > -1 && this.count < 108) {
            this.node.x -= 25 * dt;
            this.node.y -= 40 * dt;
            this.count++;
        }
        if (this.count >= 108) {
            this.ani.stop("Chicken_animation");
            this.node.color = new cc.Color(100, 0, 0);
        }
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
        //# sourceMappingURL=Chicken.js.map
        