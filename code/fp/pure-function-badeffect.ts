// 副作用
let adultAge = 18;
function checkAdult(age: number): boolean {
    return age >= adultAge
}
// 由于checkAdult方法的返回依赖于外部变量adultAge
// 当adultAge发生变化的时候，checkAdult方法的返回值也发生了变化
// 这个便是副作用

// 取消副作用的方式
// 讲adultAge置于函数内部
function checkAdultPure(age: number): boolean {
    let adultAge = 18;
    return age >= adultAge
}