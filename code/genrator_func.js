
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

function * Generator() {
     var urls = yield ajax('urls.json')
     console.log(urls)
}

var generator = Generator();
var res = generator.next()
res.value.then(item => {
    generator.next(item)
})



if(res.done) {

}