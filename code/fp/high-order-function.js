// 高阶函数-函数作为参数
function forEach(item, fn) {
    for (var i = 0; i < item.length; i++) {
        fn(item[i]);
    }
}
forEach([1, 2, 3, 4], console.log);
