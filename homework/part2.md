# 张淑峰 ｜ Part 1 | 模块二

## 代码题
### 一、基于以下代码完成下面四个练习

```js
  const fp = require('lodash/fp')
  // 数据
  // horsepower 马力，dollar_value 价格,in_stoke 库存
  const cars = [
    { name: 'Ferrari FF', horsepowser: 660, dollar_value: 700000, in_stoke: true },
    { name: 'Syper', horsepowser: 660, dollar_value: 700000, in_stoke: true },
    { name: 'Ferrari FF', horsepowser: 660, dollar_value: 700000, in_stoke: true },
    { name: 'Ferrari FF', horsepowser: 660, dollar_value: 700000, in_stoke: true },
    { name: 'Ferrari FF', horsepowser: 660, dollar_value: 700000, in_stoke: true },
    { name: 'Ferrari FF', horsepowser: 660, dollar_value: 700000, in_stoke: true }
  ]
```

#### 练习1：使用函数组合fp.flowRight()重新实现下面这个函数

```js
let isLastInStock = function (cars) {
  // 获取最后一条数据
  let last_car = fp.last(cars);
  // 获取最后一条数据的in_stoke属性值
  return fp.prop('in_stoke', last_car)
}
```

- answer:

```js
let isLastInStock = fp.flowRight(fp.prop('in_stoke'), fp.last)
```

#### 练习2：使用fp.flowRight()、fp.prop()和fp.first()获取第一个car的name

- answer:

```js
let getFirstCarName = fp.flowRight(fp.prop('name'), fp.first);
getFirstCarName(cars)
```

#### 练习3：使用帮助函数_average重构averageDollarValue，使用函数组合的方式实现

```js
let _average = function(xs) {
  return fp.reduce(fp.add, 0, xs) / xs.length
}

let averageDollarValue = function(cars) {
  let dollar_values = fp.map(function(car) {
    return car.dollar_value
  }, cars)

  return _average(dollar_values)
}
```

- answer:

```js
let averageDollarValue = function(cars) {
  function getDollarValue = (car) => car.dollar_value
  return fp.flowRight(_average, fp.map(getDollarValue))(cars)
}
```

#### 练习4：使用flowRight 写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换为这种形式：例如：写一个sanitizeNames(["Hello World"]) => ["hello_world"]

```js
let _underscore = fp.replace(/\W+/g, '_')
function sanitizeNames(strs) {
  return fp.map(fp.flowRight(_underscore, fp.toLower), strs)
}
```

### 二、基于下面提供的代码，完成后续的四个练习

```js
// suport.js
class Container {
  static of(value) {
    return new Container(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return  Container.of(fn(this._value))
  }
}

class Maybe {
  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }

  constructor(x) {
    this._value = x
  }

  map(fn) {
    return this.isNothing() ? this : Maybe.of(fn(this._value))
  }
}

module.exports = { Maybe, Container }
```

#### 练习1：使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1

```js
const fp = require('lodash/fp)
const { Maybe, Container } = require('./support')
let maybe = Maybe.of([5, 6, 1])
let ex1 = () => {
  // answer
  return maybe.map(fp.map(item => fp.add(item, 1)))
}
```

#### 练习2：实现一个函数ex2，能够使用fp.first获取列表的第一个元素

```js
const fp = require('lodash/fp)
const { Maybe, Container } = require('./support')
let xs = Container.of(['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = () => {
  // answer
  return xs.map(fp.first)
}
```

#### 练习3：实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母

```js
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let safeProp = fp.curry(function(x, o) {
  return Maybe.of(o[x])
})

let user = { id: 2, name: 'Albert' }
let ex3 = () => {
  return safeProp('name', user).map(fp.first)._value
}
```

#### 练习4：使用Maybe重写ex4，不要有if语句

```js
// app.js
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let ex4 = function(n) {
  if(n) {
    return parseInt(n)
  }
}
```

- answer:

```js
let ex4 = function(n) {
  return Maybe.of(n).map(parseInt)._value
}
```

### 四、手写实现MyPromise源码

```ts


const enum STATUS {
  PENDING = 'pending',
  FULFILLED = 'Fulfilled',
  REJECTED = 'Rejected'
}

class MyPromise {
  private status:string = STATUS.PENDING             //状态
  private value:any = undefined                      //成功的值
  private reseon:Error | undefined = undefined       //失败信息
  private successCallbackList:Function[] = []        //成功回调列表
  private failCalllbackList:Function[] = []          //失败回调列表

  constructor(executor:Function){
    try{
      executor(this.resolve , this.reject)
    }catch(e){
      this.reject(e)
    }
  }

  static resolve (value : any) {
    if(value instanceof MyPromise) return value
    return new MyPromise((resolve:Function) => {
      resolve(value)
    })
  }

  static reject (reseon : any) {
    return new MyPromise((resolve:Function , reject : Function) => {
      reject(reseon)
    })
  }

  static all (promiseList:Function[]){
    const length:number = promiseList.length
    let list:any[] = []
    let k:number = 0
    return new MyPromise((resolve:Function , reject:Function) => {
      for(let i = 0 ; i < length ; i++){
        const promise = promiseList[i]
        if(promise instanceof MyPromise){
          promise.then(
            (res:any) => {
              list[i] = res
              k++
              if(k === length) resolve(list)
            }, 
            reject
          )
        }else{
          list[i] = promise
          k++
          if(k === length){
            resolve(list)
          }
        }
      }
    })
  }

  static race (promiseList:Function[]){
    return new MyPromise((resolve:Function , reject:Function) => {
      for(let i = 0 ; i < length ; i++){
        const promise = promiseList[i]
        if(promise instanceof MyPromise){
          promise.then(resolve , reject)
        }else{
          resolve(promise)
        }
      }
    })
  }

  resolve = (value:any) => {
    if(this.status !== STATUS.PENDING) return
      this.status = STATUS.FULFILLED
      this.value = value
      while(this.successCallbackList.length) {
        const successCallback : Function  = this.successCallbackList.shift() as Function
        this.value = successCallback(this.value)
      }  
  }

  reject = (reseon:any) => {
    if(this.status !== STATUS.PENDING) return
      this.status = STATUS.REJECTED
      this.reseon = new Error(reseon)
      while(this.failCalllbackList.length) {
        const failCalllback : Function  = this.failCalllbackList.shift() as Function
        failCalllback(this.reseon)
      }
  }

  catch(failCalllback:Function){
    return this.then(undefined, failCalllback)
  }

  finally (callback?:Function) {
    callback = callback ? callback : () => {}
    return this.then(
      (value:any) => MyPromise.resolve((callback as Function)()).then(() => value),
      (reseon:any) => MyPromise.resolve((callback as Function)()).then(() => {throw reseon})
    )
  }

  then(successCallback?:Function , failCalllback?:Function){
    // 下一个then成功回调
    const promiseReslove = function (promiseNext : Object ,res:any , resolve:Function , reject:Function) {
      if(res === promiseNext){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
      }
      if(res instanceof MyPromise){
        res.then(resolve , reject)
      }else {
        resolve(res)
      }
    }
    //下一个then失败回调
    const promiseReject = function (promiseNext:Object,res : any , resolve:Function , reject:Function) {
      if(res === promiseNext){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
      }
      if(res instanceof MyPromise){
        res.then(resolve , reject)
      }else {
         reject(res)
      }
    }

    const promiseNext = new MyPromise((resolveNext:Function , rejectNext:Function) => {

      successCallback = successCallback ?  successCallback : (value:any) => value
      failCalllback = failCalllback ? failCalllback : (reseon:any) => reseon 

      if(this.status === STATUS.FULFILLED){
        setTimeout(() => {
          const res = (successCallback as Function)(this.value)
          promiseReslove(promiseNext ,res , resolveNext , rejectNext)
        } , 0)
      } else if(this.status === STATUS.REJECTED){
        setTimeout(() => {
          const err =  (failCalllback as Function)(this.reseon) 
          promiseReject(promiseNext, err , resolveNext , rejectNext)
        })
      } else {
        this.successCallbackList.push(function(value:any){
          setTimeout(() => {
            const res = (successCallback as Function)(value)
            promiseReslove(promiseNext, res , resolveNext , rejectNext)
          } , 0)
        })
        this.failCalllbackList.push(function(reseon:Error) {
          setTimeout(() => {
            const err = (failCalllback as Function)(reseon) 
            promiseReject(promiseNext ,err , resolveNext , rejectNext)
          } , 0)
        })
      }
    })

    return promiseNext
  }
}
export {
  MyPromise
}
```

### 四、描述引用计数的工作原理和优缺点

- 工作原理：引用计数是JavaScript引擎用来被动回收垃圾的机制，它将值的引用次数是否为0作为回收值空间的依据，若值对象地址被赋给一个变量，则该对象引用次数++；若引用该对象的变量取得其它值则该对象引用次数--；
当该对象被创建时引用次数++（因为有一个引用）。当某个引用该对象的变量退出其环境时，该变量被销毁，则对象引用次数--

- 优点：大多数情况下，可以很自然地回收不需要的垃圾，不需要程序员去赋值null来手动回收空间

- 缺点：循环引用的情况下，无法使引用次数清0，也无法回收空间。循环引用由于处于循环中的每个对象都需要其它对象销毁才能使它的引用次数归零。因此，每个对象都无法归零引用次数。比如：A的一个对象属性引用B，B的一个对象属性引用A。则只有当B销毁，A的引用次数才能归零，同理只有A销毁B的引用次数才能归零。因此AB皆废

### 五、描述标记整理算法的工作流程

- 工作原理：先认为所有对象都是要清除的，然后遍历正在使用的那些对象，以及由那些对象所引用的其他对象。所有这些对象都找出来之后，剩下的就是没有在使用的对象了，就可以被垃圾回收了。

### 六、描述V8中新生代的存储区垃圾回收的流程

- 流程：
  - 新生代区域一分为二，每个16M，一个使用，一个空闲
  - 开始垃圾回收的时候，会检查FROM区域中的存活对象，如果还活着，拷贝到TO空间，所有存活对象拷贝完后，清空(释放)FROM区域
  - 然后FROM和To区域互换完成垃圾回收

### 七、描述增量标记算法在何时使用及工作原理

- 何时使用：当手动去回收旧生代空间时

- 工作原理：
  - 使用标记整理算法对所有需要释放的对象进行标记，但不马上回收
  - 将标记工作分解为更小的模块，允许应用程序在模块之间运行
  - gc操作穿插在js代码执行中，减少阻塞时间。