// 抽象类

export {}

abstract class Animal {
    eat(food: string) {
        console.log("各种方法吃" + food)
    }

    abstract run(distance: number): void
}

class Monkey extends Animal {
    run(distance: number): void {
        throw new Error("Method not implemented.")
    }
}