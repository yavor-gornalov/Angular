"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Melon.prototype.tostring = function () {
        return "Element: ".concat(this.elementType, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex);
    };
    return Melon;
}());
exports.Melon = Melon;
