// 什么是可达对象，什么是不可达对象
let a = { name: 'Blank' }
let b = a

a = null;

// 代码执行后{ name: 'Blank' }是一个可达对象，因为仍旧可以存在b的引用
// 如何将上诉可达对象变为不可达
b = null; // 清除{ name: 'Blank' }剩余的引用b


function objGroup(obj1, obj2) {
    obj1.next = obj2;
    obj2.prev = obj1

    return { o1: obj1, o2: obj2 }
}

const obj = objGroup({name: 'obj1'}, {name: 'obj2'})

// 代码执行后，对象{ name: 'obj1' }和{ name: 'obj2' }都是可达对象，因为存在循环引用

// 如何将上诉可达对象变为不可达
obj.o1.next = null;
obj.o2.prev = null;
obj.o1 = null;
obj.o2 = null;
obj = null;


