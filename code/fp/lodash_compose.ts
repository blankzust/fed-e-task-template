import _ = require('lodash')

// _.flowRight()，从右向左地组合
const reverse = (arr: Array<any>) => arr.reverse()
const first = (arr: Array<any>) => arr[0]
const toUpper = (s: string) => s.toUpperCase()

const getLastUpperStr = _.flowRight(toUpper, first, reverse)

console.log(getLastUpperStr(["hello", "my", "dear", "Zhang"]))

// _.flow，从左向右地组合
const getFirstUpperStr = _.flow(first, toUpper)
console.log(getFirstUpperStr(["hello", "my", "dear", "Zhang"]))

// 模拟flowRight
const compose = (...args: Array<Function>) => (value: any) => args.reduceRight((acc, fn) => fn(acc), value) 

const getLastUpperStr2 = compose(toUpper, first, reverse)

console.log(getLastUpperStr2(["hello", "my", "dear", "Zhang"]))

// 结合律
// 1 + 2 + 3 = 6 <==等同于==>(1 + 2) + 3 = 6 <==>1 + (2 + 3)
const f1 = compose(compose(toUpper, first), reverse)
const f2 = compose(toUpper, compose(first, reverse))
console.log(f1(["hello", "my", "dear", "Zhang"]))
console.log(f2(["hello", "my", "dear", "Zhang"]))

// 调试组合后函数
