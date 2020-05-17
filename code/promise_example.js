// promise的同步情况
// node环境的输出是 "before define" "defining" "after define" "success"
console.log("before define")
const easy = new Promise(function (resolve, reject) {
    console.log("defining")
    resolve("success")
    // reject(new TypeError("error"))
})

easy.then(item => {
    console.log(item)
}).catch(err => {
    console.error(err)
})

console.log("after define")