//原始类型
let str = "hello"//String
let number = 123//number
let flag = false//boolean
let und = undefined//undefind
let nu = null //null

let big = 123n//big number
let s = Symbol('hello')//用于定义世界上独一无二的值
//引用类型
let obj = {}
let arr = []//new Array()   arr._proto_===Array.prototype arr._proto_._proto_===Array.prototype
let fn = function () { }
let date = new Date()

//instanceof判定引用类型
console.log(obj instanceof Object);//true
console.log(arr instanceof Array);//true
console.log(fn instanceof Function);//true
console.log(date instanceof Date);//true

