// 引用计数的变化

// 引用计数的减少
function fn() {
    const num1 = 1;
    const num2 = 2;

    return { num1, num2 }
}

const numGroup = fn()
// 执行后,函数作用域内的引用在函数执行完毕后会被清0


// 引用计数的增加
const obj1 = {num: 1}; // 初始化的时候obj1的引用计数为1
const obj2 = {num: 2};

const array = [obj1, obj2] // array[0]指向obj1后，obj1的引用计数+1，变为2

// 执行后，引用计数

// 引用计数的减少
obj1 = null                 // 引用计数减1，但是由于仍旧存在array[0]的方式指向obj1原本的值上，故obj1的对应值的引用计数仍旧为1