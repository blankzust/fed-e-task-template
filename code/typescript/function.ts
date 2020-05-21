export {}
function func(a: number, b?: string, ...rest: number[]) {

}

// 可选参数
func(1, "x", 2)


// 定义方式
const funcArrow: (a: number, b?:string) => string = (a, b) => {
    return "funcArrow"
}