// ts的作用域错误提示
// const a: number = 1

// 方法1： LIFE
(function() {
    const a = 1
})

// 方法2： 使用export声明本文件是一个模块
const a = 1;

export {}