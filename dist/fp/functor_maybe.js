"use strict";
// maybe函子
var Maybe = /** @class */ (function () {
    function Maybe(value) {
        this._value = value;
    }
    Maybe.of = function (value) {
        return new Maybe(value);
    };
    Maybe.prototype.map = function (fn) {
        return this.isNothing() ? Maybe.of(this._value) : Maybe.of(fn(this._value));
    };
    Maybe.prototype.isNothing = function () {
        return this._value === undefined || this._value === null;
    };
    return Maybe;
}());
var x = new Maybe("hello world");
x.map(function (item) { return item.toUpperCase(); });
console.log(x);
var y = new Maybe(undefined);
y.map(function (item) { return item.toUpperCase(); });
console.log(y);
