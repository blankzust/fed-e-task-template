"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function sum(a, b, c) {
    return a + b + c;
}
var currysum = _.curry(sum);
// console.log(currysum(1)(2)(3))
// 实现一个curry
function curry(fn) {
    return function self() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length >= fn.length) {
            return fn.apply(fn, args);
        }
        else {
            return function () {
                var nextArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    nextArgs[_i] = arguments[_i];
                }
                return self.apply(self, __spreadArrays(args, nextArgs));
            };
        }
    };
}
var myCurrySum = curry(sum);
console.log(myCurrySum(1, 2, 3));
console.log(myCurrySum(1)(2)(3));
console.log(myCurrySum(1)(2, 3));
