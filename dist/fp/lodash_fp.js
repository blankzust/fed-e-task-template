"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lodash提供的_.split、_.join、_.map都不是函数优先，数值滞后的柯里化
// 导致无法直接使用组合，必须做柯里化之后才能用组合
var _ = require("lodash");
var fp = require("lodash/fp");
// Hello My Dear Lady => Hello-My-Dear-Lady
var split = function (split) { return _.curry(function (value) { return _.split(value, split); }); };
var map = _.curry(function (callback, value) { return _.map(value, callback); });
var toUpper = _.curry(function (value) { return _.toUpper(value); });
var join = function (split) { return _.curry(function (value) { return _.join(value, split); }); };
var f = _.flowRight(join('-'), map(toUpper), split(' '));
console.log(f("Hello My Dear Lady"));
// 使用lodash/fp
var f2 = _.flowRight(fp.join('-'), fp.map(fp.toUpper), fp.split(' '));
console.log(f2("Hello My Dear Lady"));
// lodash/fp的map <==> lodash的map
console.log(_.map(["20", "10", "3"], parseInt));
console.log(fp.map(parseInt, ["20", "10", "3"]));
