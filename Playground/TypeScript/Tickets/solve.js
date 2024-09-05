"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ticket_1 = require("./ticket");
// Solve function
function solve(data, criteria) {
    var tickets = data.map(function (x) { return x.split('|'); })
        .map(function (x) { return new ticket_1.Ticket(x[0], Number(x[1]), x[2]); });
    if (criteria === "destination") {
        tickets = tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (criteria === "price") {
        tickets = tickets.sort(function (a, b) { return a.price - b.price; });
    }
    else if (criteria === "status") {
        tickets = tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
    return tickets;
}
// Test data
var data = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var criteria = 'status';
// Test result
console.log(solve(data, criteria));
