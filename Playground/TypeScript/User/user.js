"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, ", says hi!");
    };
    return User;
}());
exports.User = User;
var user = new User('Pesho');
console.log(user.sayHello());
