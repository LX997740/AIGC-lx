console.log(Number({}));//NaN
console.log(Number([]));//0

//转字符串 toString
let a = {}
a.toString()
Object.prototype.toString.call(a)

let time = new Date()
time.toString()
//转数字  valueOf

let b = new String('123')
b.valueOf()
let c = new Number(123)
c.valueOf()