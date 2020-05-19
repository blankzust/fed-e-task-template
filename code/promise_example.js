// promise的同步情况
// node环境的输出是 "before define" "defining" "after define" "success"
console.log("before define")
const easy = new Promise(function (resolve, reject) {
    console.log("defining")
    resolve("success")
    // reject(new TypeError("error"))
})

const ajax = function(url, { method = 'GET' } = {}) {
    return new Promise(function(resolve, reject) {
        const http = new XMLHttpRequest();
        http.open(method, url)
        http.onload = function() {
            if(this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        http.send();
    })
}

easy.then(item => {
    console.log(item)
    return 1
}).catch(err => {
    console.error(err)
}).then(
    item => { 
        console.log(item);
        return ajax('urls.json')
    } 
).then(item => {
    console.log(item)
})


console.log("after define")