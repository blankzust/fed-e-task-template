"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
// _.flowRight()，从右向左地组合
var reverse = function (arr) { return arr.reverse(); };
var first = function (arr) { return arr[0]; };
var toUpper = function (s) { return s.toUpperCase(); };
var getLastUpperStr = _.flowRight(toUpper, first, reverse);
console.log(getLastUpperStr(["hello", "my", "dear", "Zhang"]));
// _.flow，从左向右地组合
var getFirstUpperStr = _.flow(first, toUpper);
console.log(getFirstUpperStr(["hello", "my", "dear", "Zhang"]));
// 模拟flowRight
var compose = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (value) { return args.reduceRight(function (acc, fn) { return fn(acc); }, value); };
};
var getLastUpperStr2 = compose(toUpper, first, reverse);
console.log(getLastUpperStr2(["hello", "my", "dear", "Zhang"]));
// 结合律
// 1 + 2 + 3 = 6 <==等同于==>(1 + 2) + 3 = 6 <==>1 + (2 + 3)
var f1 = compose(compose(toUpper, first), reverse);
var f2 = compose(toUpper, compose(first, reverse));
console.log(f1(["hello", "my", "dear", "Zhang"]));
console.log(f2(["hello", "my", "dear", "Zhang"]));
// 调试组合后函数
