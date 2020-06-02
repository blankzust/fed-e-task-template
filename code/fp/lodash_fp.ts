// lodash提供的_.split、_.join、_.map都不是函数优先，数值滞后的柯里化
// 导致无法直接使用组合，必须做柯里化之后才能用组合
import _ = require('lodash')
import fp = require('lodash/fp')

// Hello My Dear Lady => Hello-My-Dear-Lady
const split = (split: string) => _.curry( (value: string) => _.split(value, split))  
const map = _.curry((callback: Function, value: Array<any>) => _.map(value, callback))
const toUpper = _.curry((value: string) => _.toUpper(value))
const join = (split: string) => _.curry((value: Array<string>) => _.join(value, split))

const f = _.flowRight(join('-'), map(toUpper), split(' '))
console.log(f("Hello My Dear Lady"))


// 使用lodash/fp
const f2 = _.flowRight(fp.join('-'), fp.map(fp.toUpper), fp.split(' '))
console.log(f2("Hello My Dear Lady"))

// lodash/fp的map <==> lodash的map
console.log(_.map(["20", "10", "3"], parseInt))
console.log(fp.map(parseInt, ["20", "10", "3"]))
