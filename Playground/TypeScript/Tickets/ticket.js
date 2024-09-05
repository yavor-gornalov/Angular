"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(description, price, status) {
        this.destination = description;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
exports.Ticket = Ticket;
