# 函数数编程基本概念
- 不是使用了数学函数就是函数式编程，比如说使用了Math.max()之类的
- 函数式编程要求同样的输入有同样的输出
- Functional Programing(FP)

## MDN First-class Function
函数是一等公民：
- 函数可以赋值给变量
- 可以作为参数返回
```js
// 简化前
var obj = {
    min: function() {
        return Math.min.apply(arguments)
    }
}

// 简化后
// 参数一致的情况下可以直接赋值，简化代码写法
var obj2 = {
    min: Math.min
}
```

## 高阶函数
- 函数作为参数

- 函数作为返回值

## 高阶函数的意义
- 抽象可以帮我们屏蔽细节，只需要关注于我们的目标
- 用来抽象通用的问题

## 常用的高阶函数

- map的高阶函数实现
```ts
// map的高阶函数实现
const map: (array: Array<any>, fn: Function) => Array<any> = (array, fn) => {
    const results = [];
    for(let value of array) {
        results.push(fn(value))
    }

    return results;
}


console.log(map([1,2,3,4], (item: any) => { return `${item}` }))
```
