"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log("趴着跑");
    };
    Animal.prototype.eat = function () {
        console.log("吃生食");
    };
    return Animal;
}());
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.run = function () {
        console.log("站着跑");
    };
    People.prototype.eat = function () {
        console.log("吃熟食");
    };
    return People;
}());
