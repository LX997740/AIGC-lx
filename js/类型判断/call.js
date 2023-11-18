var obj = {
    a: 1,
    foo: foo
}
function foo(x, y) {
    console.log(this.a, x + y);
}
foo(obj)
obj.foo()
foo.call(obj, 1, 2)
//call实现原理

// {
//     fn:foo
// }
// obj.fn()
// delete obj.fn.


Function.prototype.myCall = function (context) {
    let args = Array.from(arguments).splice(1)
    if (typeof this !== 'function') {
        throw new TypeError('myCall is not a function')
    }
    context.fn = this
    let res = context.fn(...args)//触发this隐式绑定规则
    delete context.fn
    return res
}
foo.myCall(obj, 1, 2)