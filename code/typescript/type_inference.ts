// 有明确赋值的情况下，会自动判断变量类型
// 不需要
let number = 1;
// 下面代码会报语法错误，
// number = "ss"
const num = 2
let any
any = 1;
// 这里不报错，因为没赋值的情况下是any类型
any = "s"