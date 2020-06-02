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

## 纯函数

- 纯函数：相同输入始终返回相同输出，且没有可观察的副作用（数组的slice方法是纯函数，而splice方法是不纯函数）
- 纯函数必须要有参数
- lodash是一个纯函数库

## Lodash

## 纯函数的优势

- 可记忆
- 便于多线程处理

## 非纯函数的副作用

- 副作用指的是：函数依赖于外部状态
  - 外部状态有：
        - 配置文件
        - 数据库
        - 获取用户的输入
- 无法完全避免副作用，因为始终会有消息来自于函数外部，比如说用户名密码之类信息
- 虽然不可能完全避免，但是要控制它们在可控范围内发生

-----

## 柯里化

```ts
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
```

### lodash提供的curry纯函数

```ts
import _ = require("lodash")

function sum(a: number, b: number, c: number) {
    return a + b + c;
}

const currysum = _.curry(sum)
console.log(currysum(1)(2)(3))
// 打印结果为6
```

### 模拟实现lodash的curry函数

```ts
// 实现一个curry
// 基本的思路就是递归
// 当传参长度小于形参长度时，返回一个运行了就会调用自身的纯函数
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
```

### 柯里化总结

- 柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的新函数
- 这是对函数参数的缓存
- 让函数变得更灵活，让函数的粒度更小
- 可以把多元函数转换为医院函数，可以组合使用函数

-----

## 函数组合

- 函数组合（compose）：将若干个函数组合在一起，从右向左依次执行，上一个函数的结果会作为下一个函数的入参，首次传入的入参作为最右边函数的入参
- 函数组合的好处：提高函数粒度，方便排查问题

```ts
import _ = require('lodash')

// Hello My Dear Lady => HELLO-MY-DEAR-LADY
const split = (split: string) => _.curry( (value: string) => _.split(value, split))  
const map = _.curry((callback: Function, value: Array<any>) => _.map(value, callback))
const toUpper = _.curry((value: string) => _.toUpper(value))
const join = (split: string) => _.curry((value: Array<string>) => _.join(value, split))

const f = _.flowRight(join('-'), map(toUpper), split(' '))
console.log(f("Hello My Dear Lady"))
```

### lodash/fp

- 适合函数式编程友好的要求：`auto-curried iteratee-first data-last`
- lodash/fp提供了一系列函数时编程友好的方法

```ts
import fp = require('lodash/fp')
// 使用lodash/fp
const f2 = _.flowRight(fp.join('-'), fp.map(fp.toUpper), fp.split(' '))
console.log(f2("Hello My Dear Lady"))
```

### lodash/fp的map与lodash的map区别

- lodash的map对callback的传参为两个参数，值和下标
- lodash/fp的map对callback的传参为1个参数，值
- lodash/fp由于回调传参没有多余参数，更适合函数式编程

```ts
// lodash/fp的map <==> lodash的map
console.log(_.map(["20", "10", "3"], parseInt)) // 打印出[ 20, NaN, NaN ]， 因为最终执行的是parseInt("20", 0),parseInt("10", 1),parseInt("3", 2) 第二个参数表示进制
console.log(fp.map(parseInt, ["20", "10", "3"])) // 打印出[ 20, 10, 4 ]
```

`tip：在不熟悉函数入参的时候，少用简化写法，parseInt改为(val) => parseInt(val)`

### Point Free

- 不需要指明处理的函数
- 只需要合成运算过程
- 需要定义一些辅助的基本运算函数

----
## 函子（functor）
- 函子是一个容器：包含值和值的变形关系
- 函子必须有map方法，map方法可以运行一个函数对值进行处理

```ts
// 函子的标准格式
class FunctorName {
    constructor (value: any) {
        // 对this._value赋值操作
    }
    static of(value: any) {
        // 返回新的函子
        // 工厂静态方法
    }
    map(fn: Function) {
        // 对this._value进行变形操作
        // 返回新的函子，不直接返回值
    }
}
```

### Maybe函子

- maybe函子用来解决空值错误的副作用
- **缺陷：**maybe函子无法准确判断是哪一个变形处理出现的空值

```ts
// maybe函子
import fp from 'lodash/fp'
class Maybe {
  _value?: string
  constructor(value?: string) {
    this._value = value
  }

  static of(value: any) {
    return new Maybe(value)
  }

  map(fn: Function) {
    return this.isNothing()?Maybe.of(this._value):Maybe.of(fn(this._value))
  }

  isNothing() {
    return this._value === undefined || this._value === null
  }
}

const x = new Maybe("hello world");
x.map((item: string) => item.toUpperCase())

console.log(x);

const y = new Maybe(undefined);
y.map((item: string) => item.toUpperCase())

console.log(y)
```

### Either函子

- Either函子由两个函子组成，一个函子（Right）记录正确信息，一个函子（Left）记录错误信息

```ts
import { parse } from "querystring";

class Right {
  private _value: any
  constructor(value: any) {
    this._value = value;
  }
  static of(value: any) {
    return new Right(value)
  }
  map(fn: Function) {
    return Right.of(fn(this._value))
  }
}

class Left {
  private _value: any
  constructor(value: any) {
    this._value = value;
  }
  static of(value: any) {
    return new Left(value)
  }
  map(fn: Function) {
    return Left.of(this._value)
  }
}

function parseJSON(val: string) {
  try {
    return Right.of(JSON.parse(val))
  } catch (e) {
    return Left.of({ err: e.message })
  }
}

const r = parseJSON("{ name: 1 }")

console.log(r)

const r2 = parseJSON('{ "name": "zsf" }')
            .map((item: any) => item.name.toUpperCase())

console.log(r2)
```

### IO函子

- 内部的_value是函数
- 可以延迟_value的执行，当执行的时候才会引入副作用，是一种甩锅方式

```ts
import fp = require("lodash/fp")
class IO {
  private _value: (...args: Array<any>) => any
  constructor(fn: (...args: Array<any>) => any) {
    this._value = fn;
  }
  static of(value: any) {
    return new IO(() => value)
  }
  run() {
    return this._value();
  }
  map(fn: (...args: Array<any>) => any) {
    return new IO(fp.flowRight(fn, this._value))
  }
}

const io = IO.of(process).map((p: NodeJS.Process) => p.execPath)
console.log(io.run());
```

### Task函子

- 作用：用来处理异步任务
- 特点：map方法为函数参数提供了resolve和reject入参，类似promise，通过调用resolve和reject来达到状态终止的作用

### Monad函子

- 作用: