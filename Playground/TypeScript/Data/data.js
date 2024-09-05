"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = '';
        this.fulfilled = false;
    }
    return Data;
}());
exports.Data = Data;
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
