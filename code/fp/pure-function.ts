// 纯函数和不纯的函数

let array = [1, 2, 3, 4, 5];

// 纯函数
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))

// 不纯函数
// splice方法每次返回的值不一样
// 故splice是不纯函数
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))