// 一道面试题
async function async1() {
    console.log("AAAA")
    async2()
    console.log("BBBB")
}

async function async2() {
    console.log("CCCC")
}

console.log('DDDD')

setTimeout(function() {
    console.log('FFFF')
}, 0)

async1();

new Promise(function(resolve) {
    console.log('GGGG')
    resolve()
}).then(function() {
    console.log('HHHH')
})
console.log("IIII")

// 第一轮调用栈
/**
 * console.log('DDDD') => async1() => console.log('AAAA') => console.log('AAAA')  => console.log()
 *                                    async2()               console.log("CCCC")
 *                                    console.log("BBBB")    async2()
 *                                    async1()               console.log("BBBB")
 *                                                           async1()
 * 
 */

 // DDDD AAAA CCCC BBBB GGGG IIII HHHH FFFF