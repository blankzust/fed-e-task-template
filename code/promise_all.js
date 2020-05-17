// promise并行执行
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

ajax('http://127.0.0.1:8080/urls.json').then(urls => {
    urls = JSON.parse(urls)
    return Promise.all(urls.map(url => ajax(url)))
}).then(values => {
    console.log(values)
})