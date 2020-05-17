// promise.race 示例：超时检查
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

var timeout = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error("timeout"))
    }, 1)
})

Promise.race([ ajax('./test.json'), timeout ])
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })