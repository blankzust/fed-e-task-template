"use strict";
// 有明确赋值的情况下，会自动判断变量类型
// 不需要
var number = 1;
// 下面代码会报语法错误，
// number = "ss"
var num = 2;
var any;
any = 1;
// 这里不报错，因为没赋值的情况下是any类型
any = "s";
