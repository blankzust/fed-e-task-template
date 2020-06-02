"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function sum(a, b) {
    console.log("sum");
    return a + b;
}
var memorySum = _.memoize(sum);
console.log(memorySum(1, 2));
console.log(memorySum(1, 2));
console.log(memorySum(1, 2));
// 实现一个记忆函数
function memoize(fn) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        cache[key] = cache[key] || fn.apply(fn, arguments);
        return cache[key];
    };
}
var mymemorySum = memoize(sum);
console.log(mymemorySum(1, 2));
console.log(mymemorySum(1, 2));
console.log(mymemorySum(1, 2, 3));
