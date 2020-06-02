"use strict";
// map的高阶函数实现
var map = function (array, fn) {
    var results = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        results.push(fn(value));
    }
    return results;
};
console.log(map([1, 2, 3, 4], function (item) { return "" + item; }));
function sssa(arr) {
}
