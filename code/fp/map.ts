// map的高阶函数实现
const map: (array: Array<any>, fn: Function) => Array<any> = (array, fn) => {
    const results = [];
    for(let value of array) {
        results.push(fn(value))
    }

    return results;
}


console.log(map([1,2,3,4], (item: any) => { return `${item}` }))
function sssa (arr) {

}