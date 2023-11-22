function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(12345);
            resolve('2222')
        }, 2000)
    })
}
function mr() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(222222);
            resolve()
        }, 1000)
    })
}
function bb() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(222222222);
        }, 500)
    })

}
function bb2() {
    setTimeout(() => {
        console.log(222222222);
    }, 300)
}

xq().then(() => {//.then虽然会返回一个promise，但是当执行then的回调有人为返回的promise时,  .then默认的promise会失效
    return mr()
}).then(() => {
    return bb()
}).then(()=>{
    bb2()
})