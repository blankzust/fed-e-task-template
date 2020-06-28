const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let maybe = Maybe.of([5, 6, 1])
let ex1 = () => {
  // answer
  return maybe.map(fp.map(item => fp.add(item, 1)))
}

console.log(ex1())

let xs = Container.of(['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = () => {
  // answer
  return xs.map(fp.first)
}

console.log(ex2())


let safeProp = fp.curry(function(x, o) {
  return Maybe.of(o[x])
})

let user = { id: 2, name: 'Albert' }
let ex3 = () => {
  return safeProp('name', user).map(fp.first)._value
}

console.log(ex3())

let ex4 = function(n) {
  return Maybe.of(n).map(parseInt)._value
}

console.log(ex4(null))