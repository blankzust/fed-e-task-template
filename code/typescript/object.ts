// Object类型

export {}

// object类型指除了基本类型之外的所有类型，函数、对象均可以
const foo: object = function() {};

// 这种解构方式的Object类型声明会检查成员变量是否完整以及对于成员变量是否赋准确值
const obj: { foo: number, bar: string } = { foo: 1, bar: "" }