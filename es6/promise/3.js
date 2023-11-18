
function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            reject('错误')//抛出一个错误
            
        }, 1000)
    })
}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve('b执行成功')
        }, 1500)
    })
}
function c() {
    console.log('c');
}

//all  必须要接收到的所有的Promise状态都为resolve,then才会调用
// Promise.all([a(),b()]).then(c).catch((err) => {
//     console.log(err)
// }).finally(c)
//finally 不管成功没有都会执行c

// a()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//race()
//a()b()都要成功执行,但是then只接收最快执行的
Promise.race([a(),b()]).then(c)
.catch((err)=>{
    console.log(err);
})