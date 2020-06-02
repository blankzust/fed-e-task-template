"use strict";
// 高阶函数-函数作为参数
function forEach(item, fn) {
    for (var i = 0; i < item.length; i++) {
        fn(item[i]);
    }
}
forEach([1, 2, 3, 4], console.log);
// 高阶函数-函数作为返回值
// once
function once(fn) {
    var done = false;
    return function () {
        if (!done) {
            done = true;
            return fn.apply(this, arguments);
        }
    };
}
var pay = once(function (num) { console.log("pay " + num); });
pay(5);
pay(5);
