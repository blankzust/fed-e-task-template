"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 这种语法检查很棒
// 省去了字段类型判断
function sum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.reduce(function (prev, current) { return prev + current; });
}
sum();
sum(1, 2);
