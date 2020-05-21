// 数组类型
export {}

const arr1: Array<number> = [1, 2, 3]

const arr2: number[] = [1, 2, 3]

// 这种语法检查很棒
// 省去了字段类型判断
function sum(...arg: Array<number>) {
    return arg.reduce((prev, current) => prev + current);
}

sum();
sum(1,2)