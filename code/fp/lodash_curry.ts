import _ = require("lodash")

function sum(a: number, b: number, c: number) {
    return a + b + c;
}

const currysum = _.curry(sum)
console.log(currysum(1)(2)(3))

// 实现一个curry
function curry(fn: Function) : Function {
    return function self (...args: Array<any>): any {
        if(args.length >= fn.length) {
            return fn.apply(fn, args)
        } else {
            return function(...nextArgs: Array<any>) { 
                return self.apply(self, [...args, ...nextArgs]) 
            }
        }
    }
}

const myCurrySum = curry(sum);
console.log(myCurrySum(1, 2, 3))
console.log(myCurrySum(1)(2)(3))
console.log(myCurrySum(1)(2, 3))
