function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A完成');
            resolve()
        }, 1000)

    })
}
function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步B完成');
            resolve()
        }, 500)
    })

}
function C() {
    setTimeout(() => {
        console.log('异步C完成');
    }, 100)
}
async function foo() {
    await A()//await 会阻塞后续代码,将后续代码推入到微任务队列
    console.log(0);
    await B()
    C()
}
console.log(foo());