"use strict";
// 抽象类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function (food) {
        console.log("各种方法吃" + food);
    };
    return Animal;
}());
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monkey.prototype.run = function (distance) {
        throw new Error("Method not implemented.");
    };
    return Monkey;
}(Animal));
var monkey = new Monkey();
