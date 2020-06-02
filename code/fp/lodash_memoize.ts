// 记忆函数
export {}
import _ = require("lodash")
import { Interface } from "readline"

function sum(a: number, b: number) {
    console.log("sum")
    return a + b
}

const memorySum = _.memoize(sum)
console.log(memorySum(1,2))
console.log(memorySum(1,2))
console.log(memorySum(1,2))


// 实现一个记忆函数
function memoize(fn: Function): Function {
    interface CacheInterface {
        [key: string]: any
    }
    const cache: CacheInterface = {};
    return function () {
        const key: string = JSON.stringify(arguments);
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key];
    }
}

const mymemorySum = memoize(sum)
console.log(mymemorySum(1,2))
console.log(mymemorySum(1,2))
console.log(mymemorySum(1,2,3))