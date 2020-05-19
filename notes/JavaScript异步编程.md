# 异步和同步的区别
同步是调用栈的进出操作



异步是

-------
**常见误区**
- 嵌套使用
错误示例代码：

-----
promise的链式调用不是常规的链式调用，then方法返回的不是原来的promise对象，而是创建了一个新的Promise对象
实例代码[待补充]

每一个then方法都为上一个Promise创建状态回调的承诺

-----
**异常处理的两种方式**

- 传参方式：
new Promise(promiseFunction).then(onFullfilled, onRejected)

- catch方式
new Promise(promiseFunction).then(onFullfilled).catch(onRejcted)

**区别**：catch方式会监听promiseFunction和onFullfilled中的异常，传参方式只能监听到promiseFunction（即then之前返回的promise）
catch方式会更加易于理解一点，是更优解

------
**Promise静态方法**
- Promise.resolve

1.Promise.resolve(promise) will return promise itself.
test:[待补充]
2.Promise.resolve(obj) will return a promise which is fullfilled with obj
test:[待补充]
3.Promise.resolve(第三方promise) 可以直接使用第三方的实现了then方法的promise，这些promise可能是Promise发明之前出现的。For Example? bluebird

- Promise.reject
快速创建一定是失败的promise，参数为失败的原因

-------
**Promise并行**
- Promise.all([promises])
等待promises数组内的所有promise执行完且都成功执行之后才会执行接下里的then
test:[待补充]

- Promise.race([promises])
只执行最先回调的promise
test:[待补充]

-------
**Promise执行时序**
- Promise定义的onFullfilled（成功回调）、onRejected（失败回调）会进入到微任务队列中，在调用栈所有调用任务执行完毕后，会马上执行
- setTimeout之类的api方法定义的callback进入宏任务队列中，
- 故微任务永远在宏任务之前执行
-------
**Generator 异步方案**

tips:
- generator函数返回一个generator对象，数据结构为{ done, value }
- generator函数内部良好的异步编程方案需要外界一个co函数的帮忙
-----
**Async Await**
- Async 关键字修饰的函数可以使用 await 关键字，起到类似于Generator 函数的 yield的作用，且无需外界调用，内部自动等待执行。

------
**课后题**
