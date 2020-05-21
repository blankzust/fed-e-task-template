// 类
// typescript新增了一些特性

// 1.ts中的class中给this直接赋值是报语法错误的，需要声明
class Person {
    name: string
    age: number

    constructor() {
        this.name = "Zhang"
        this.age = 26
    }
}

// 2.访问修饰符
class People {
    public name: string
    // 私有属性,只能在类内部访问
    private age: number
    // 受保护的,只允许在子类当中访问
    protected gender: boolean

    constructor() {
        this.name = "Zhang"
        this.age = 26
    }
}

const tom = new People();
// tom.age;

class Student extends People {
    constructor() {
        super();
        this.gender = true
    }
}

// 3.只读属性
class Man extends People {
    readonly desc: string
    constructor() {
        super();
        this.desc = "a man"
    }
}

const man = new Man();
// man.desc = "ssss"