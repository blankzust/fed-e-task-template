"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
}
// 可选参数
func(1, "x", 2);
// 定义方式
var funcArrow = function (a, b) {
    return "funcArrow";
};
