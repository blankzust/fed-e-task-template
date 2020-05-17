// promise 封装ajax
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

ajax("./test.json").then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

export default ajax;