
Function.prototype.myBind = function (context, ...args) {
    //函数本身 this
    // this()
    // console.log(typeof this);
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    context = context || window//位于闭包之中
    let that = this
    return function fn(...innerArgs) {
        //外面的this 丢失了
        //this
        //把原先的函数执行 ,并且this手动指定为context
        if (this instanceof fn) {//new 的方式来运行
            return new that(...args,...innerArgs)            
        }

        return that.apply(context,[...args,...innerArgs])
    }
}

function sayHello(x, y, z) {
    console.log("函数中的", this)
    console.log("你好:", this.name)
    console.log(x + y + z);
}
// const arrowFn = () => {
//     //this
// }
// const f2 = arrowFn.myBind
// f2()

let preson = {
    name: "李旭"
}

// arrowFn.myBind(preson, 1, 2)

let bindFn = sayHello.myBind(preson, 1, 2);
console.log(bindFn(3))