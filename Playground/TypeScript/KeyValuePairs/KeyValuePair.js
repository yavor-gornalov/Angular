"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePair = void 0;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key: ".concat(this.key, ", value: ").concat(this.value));
    };
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
