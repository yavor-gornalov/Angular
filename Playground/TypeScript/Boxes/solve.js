"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = require("./Box");
// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);
var box = new Box_1.Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);