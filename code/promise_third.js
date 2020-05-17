// 第三方promise
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

const thirdPromise = {
    then: function(resolve) {
        console.log("testThrid Promise")
        return 
    }
}
ajax('./test.json').then(function(res) {
    return Promise.resolve(thirdPromise)
}).then(function(data) { console.log(data) })