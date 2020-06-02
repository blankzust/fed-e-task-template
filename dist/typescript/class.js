"use strict";
// 类
// typescript新增了一些特性
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
// 1.ts中的class中给this直接赋值是报语法错误的，需要声明
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Zhang";
        this.age = 26;
    }
    return Person;
}());
// 2.访问修饰符
var People = /** @class */ (function () {
    function People() {
        this.name = "Zhang";
        this.age = 26;
    }
    return People;
}());
var tom = new People();
// tom.age;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super.call(this) || this;
        _this.gender = true;
        return _this;
    }
    return Student;
}(People));
// 3.只读属性
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        var _this = _super.call(this) || this;
        _this.desc = "a man";
        return _this;
    }
    return Man;
}(People));
var man = new Man();
// man.desc = "ssss"
