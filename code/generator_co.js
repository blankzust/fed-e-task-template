// 实现一个保障生成器函数内部异步编程的co函数
function co(main) {
    var generator = main();
    function next(data) {
        var a = generator.next(data)
        if(!a.done) {
            if(a.value.then) {
                a.value.then(data => {
                    next(data)
                })
            } else {
                next(a.value)
            }
        }
    }

    next()
}

function * test() {
    const urls = yield ajax('urls.json');
    console.log(urls);
    const menus = yield ajax('menu.json');
    console.log(menus);
    const test = yield ajax('test.json');
    console.log(test)
}

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

co(test)