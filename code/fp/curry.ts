// 原先的硬编码问题
// function checkAdultPure(age: number): boolean {
//     let adultAge = 18; // 这里定义了一个常量，属于硬编码的范畴
//     return age >= adultAge
// }

// curry化的第一步
// 把硬编码的定义部分作为参数抛给外面来做
function checkAdultPure(min: number, age: number): boolean {
    return age >= min
}

// 第一步过后，产生了多个参数，导致在调用的时候出现参数重复的现象
checkAdultPure(18, 20)
checkAdultPure(18, 22)
checkAdultPure(17, 20)

// curry化的第二步
// 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不会发生变化）
// 使用高阶函数的方式来先顶死一部分参数

function getAdultCheck(min: number): Function {
    return function (age: number) {
        return age >= min
    }
}

const check18Adult = getAdultCheck(18)
const check20Adult = getAdultCheck(20)
console.log(check18Adult(20));
console.log(check18Adult(22));
console.log(check20Adult(20));