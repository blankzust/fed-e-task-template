// 形容类与类之间共同的特性
export {}
interface Runnable {
    run(distance: number): void
}

interface Eatable {
    eat(food: string): void
}

class Animal implements Runnable, Eatable {
    run() {
        console.log("趴着跑");
    }

    eat() {
        console.log("吃生食")
    }
}

class People implements Runnable,Eatable {
    run() {
        console.log("站着跑");
    }

    eat() {
        console.log("吃熟食")
    }
}