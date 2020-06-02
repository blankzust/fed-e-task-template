"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nums = [1, 2, 3, 4];
var res = nums.find(function (i) { return i > 2; });
// 为啥没有语法报错？
var num = res * res;
