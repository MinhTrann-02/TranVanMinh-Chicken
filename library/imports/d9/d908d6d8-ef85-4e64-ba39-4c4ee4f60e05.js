"use strict";
cc._RF.push(module, 'd908dbY74VOZLo5TE7k9g4F', 'Light');
// Script/Light.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        redSprite: cc.Sprite,
        yellowSprite: cc.Sprite,
        greenSprite: cc.Sprite,
        chicken: cc.Sprite,
        car: cc.Sprite,
        _count: 0,
        _time: 0,
        _timeFlash: 0,
        _red: cc.Color.RED,
        _yellow: cc.Color.YELLOW,
        _green: cc.Color.GREEN,
        _colorDefault: cc.Color.GRAY
    },

    start: function start() {
        this.turnOff(this.redSprite);
        this.turnOff(this.yellowSprite);
        this.turnOff(this.greenSprite);
    },
    update: function update(dt) {
        if (this._time > 0) {
            this.turnOn(this.redSprite, this._red);
            this.turnOff(this.yellowSprite);
            this.turnOff(this.greenSprite);
        }
        if (this._time > 1) {
            this.flashLight(this.redSprite, this._red, 0.4, 3, dt);
        }
        if (this._time > 2.5) {
            this.turnOn(this.yellowSprite, this._yellow);
            this.turnOff(this.redSprite);
            this.turnOff(this.greenSprite);
        }
        if (this._time > 3.6) {
            this.flashLight(this.yellowSprite, this._yellow, 0.4, 3, dt);
        }
        if (this._time > 4.8 && this._time < 5) {
            this.chicken.getComponent("Chicken").count = 0;
        }
        if (this._time > 4.8) {
            this.turnOn(this.greenSprite, this._green);
            this.turnOff(this.yellowSprite);
            this.turnOff(this.redSprite);
            this.car.getComponent("Car").speed = 360;
        }
        this._time += dt;
    },
    turnOn: function turnOn(sprite, color) {
        sprite.node.color = color;
    },
    turnOff: function turnOff(sprite, color) {
        sprite.node.color = this._colorDefault;
    },
    flashLight: function flashLight(sprite, color, timeFlash, times, dt) {
        if (this._timeFlash === 0) {
            sprite.node.color = this._colorDefault;
        }
        this._timeFlash += dt;
        if (this._timeFlash >= timeFlash) {
            sprite.node.color = color;
            this._timeFlash = 0;
            this._count++;
            if (this._count === times) {
                this._count = 0;
                return true;
            } else return false;
        }
    }
});

cc._RF.pop();