# 张淑峰 ｜ Part 1 | 模块一

## 简答题

> 此处回答简答题的内容。每一题为一个三级标题，可以后面跟上题目，也可以不跟，下面为格式示例：

### 第一题
var a = [];
for(var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}

a[6]();

最终执行结果为：打印出 10。

原因是因为 for循环体内部用var声明的i是挂在window下的一个全局作用变量，当循环执行完毕的时候，i为10，函数体内部使用的i变量会先从当前函数作用域中寻找，找不到的时候，会从父级作用域寻找，这里的父级作用域就是window，故查找的就是window.i;

### 第二题：
var tmp = 123;

if (true) {
    console.log(tmp);
    let tmp;
}

最终执行结果为：打印出 报错

原因是因为：在有let声明的代码块中，let声明的变量，只有在声明后才能使用

### 第三题：结合ES6的新语法，用最简单的方式找出数组中的最小值
var arr = [12, 34, 32, 89, 4]

arr.reduce((prev, current) => Math.min(prev, current))

### 第四题：请详细说明var let const三种声明变量的方式之间的具体差别
- var 声明的变量在运行过程中会被提前到顶部，故在声明之前可以使用var，且不会报错， 而let、const声明之后才可以使用，否则会报错
- var 声明的变量只有函数作用域和全局作用域，而let、const在声明的时候就定义了一个块级作用域，这个块级作用域中用let、const声明的变量，脱离了代码块之外就无法使用了，会报错。
- let、var声明的变量可以再次赋值，const声明的变量无法再次赋值且必须有初始值

### 第五题：
var a = 10;
var obj = {
    a: 20,
    fn () {
        // console.log(this.a)
        // 上诉的this为obj本身，故箭头函数内不的this也为obj
        setTimeout(() => {
            console.log(this.a)
        })
    }
}

obj.fn()

最终执行结果为：打印出 20

原因是因为： 箭头函数会保持函数内与调用的时候的this一致，而obj.fn()的调用者是obj,fn执行的时候的this也为obj，而箭头函数保持了this的指向


### 第六题：简述Symbol类型的用途
- Symbol类型可以作为一个独一无二的标识符
- Symbol类型可以定义对象中的私有成员变量
- Symbol类型可以为对象创建独一无二的属性
- 可以用Symbol类型常量覆盖一些基本方法，比如说对象类型的toString方法。可以通过obj[Symbol.toStringTag] = function() { ...return指定格式的字符串 }，来覆盖

### 第七题：说说什么是浅拷贝，什么是深拷贝
- 浅拷贝指的是对对象引用的拷贝，从储存空间上来讲，他只额外产生一点点可以忽略不计的体积，通过浅拷贝产生的变量来影响对象属性时，原本对象的属性也会受到影响，common js引入的模块就是一个浅拷贝，改变require进来的对象属性值，会影响到require同样模块的其他模块。通常=就可以浅拷贝，操作难度不大。
- 深拷贝指的是对对象本身内容的拷贝，它产生的空间占用远大于浅拷贝，拷贝之后的对象的属性发生变化后，原本对象不会产生影响。 ES Module引入的模块就是一个深拷贝。对象深拷贝有时使用“对象 =>JSON.stringify=> JSON字符串 => JSON.parse => 另一个对象”的方式来进行。有时候也使用{ ...obj }这种方式来做。

### 第八题：谈谈你是如何理解JS异步编程的，Event Loop是做什么的，什么是宏任务，什么是微任务？
- JS同步编程指的调用栈的先进后出，代码会逐行执行，遇到函数的时候，先将函数内部的代码压入调用栈，执行完后释放，而异步编程下的代码并不会逐行执行，它会暂时脱离调用栈。
- Event Loop 是用来监听消息队列、调用栈的，当调用栈为空且消息队列长度大于0时。会将消息内列中任务放到调用栈中，开始执行。
- 宏任务指的是用setTimeout等客户端api调用产生的待执行callback，这些api在执行后，会开启一个区别于js线程的新线程，用于计时，当计时结束的时候，宏任务就会被放到消息队列中等待执行。
- 微任务指的是用Promise定义的回调(new Promise传参或者then、catch的传参)，微任务在Promise执行后，会直接放到消息队列中，等待当前调用堆栈执行完后执行。

### 第九题：将下面的异步代码使用Promise改进

setTimeout(function () { 
    var a = "Hello";
    setTimeout(function() {
        var b = "lagou";
        setTimeout(function() {
            var c = "I love U";
            console.log(a + b + c)
        }, 10)
    }, 10)
}, 10)

new Promise(function (resolve) {
    setTimeout(function() { resolve("Hello") }, 10)
}).then(function(val) {
    return new Promise(function (resolve) {
        setTimeout(function() { resolve(val + "lagou") }, 10)
    })
}).then(function(val) {
    setTimeout(function() { console.log(val + "I love you") }, 10)
})

### 第十题：请简述TypeScript与JavaScript之间的关系
- TypeScript是JavaScript的超集，除了能支持原生Javascript之外，TypeScript中还包含了对类型系统、ES6+新特性的支持。
- TypeScript引擎可以将TypeScript代码编译为指定es版本的JavaScript，这种编译过程也是区别于JavaScript的，因为JavaScript代码是直接运行的，错误都是于运行中发现，而TypeScript是可编译的，很多语法错误可以提前报出。

### 第十一题：请谈谈你所认为的TypeScript优缺点
优点
- 补充了接口，使得前端面向对象开发更加完善了
- 完善的类型检查机制，往常我们使用React.PropTypes来进行检查，有了ts之后，这种被废弃的机制可以不再沿用
- 补充了成员变量的读取权限
- 补充了数据字典的快捷定义
- typescript让编写JavaScript的过程更接近于Java，TypeScript编写代码时也会具有Java一样的严谨性
缺点：
- 对于小型项目而言，需要做一些额外的开发工作，增加了工作量
- 原本已经用JavaScript写了的代码，难以重构为TypeScript，一旦重构，需要处理大量的语法错误