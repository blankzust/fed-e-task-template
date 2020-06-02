"use strict";
exports.__esModule = true;
var Right = /** @class */ (function () {
    function Right(value) {
        this._value = value;
    }
    Right.of = function (value) {
        return new Right(value);
    };
    Right.prototype.map = function (fn) {
        return Right.of(fn(this._value));
    };
    return Right;
}());
var Left = /** @class */ (function () {
    function Left(value) {
        this._value = value;
    }
    Left.of = function (value) {
        return new Left(value);
    };
    Left.prototype.map = function (fn) {
        return Left.of(this._value);
    };
    return Left;
}());
function parseJSON(val) {
    try {
        return Left.of(JSON.parse(val));
    }
    catch (e) {
        return Right.of({ err: e.message });
    }
}
var r = parseJSON("{ name: 1 }");
console.log(r);
var r2 = parseJSON('{ "name": 1 }')
    .map(function (item) { return item.name.toUpperCase(); });
console.log(r2);
