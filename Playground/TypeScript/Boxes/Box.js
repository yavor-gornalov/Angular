"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box() {
        this.elements = [];
    }
    Box.prototype.add = function (element) {
        this.elements.push(element);
    };
    Box.prototype.remove = function () {
        this.elements.shift();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.Box = Box;
