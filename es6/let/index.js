//var 声明提升
// var a
// console.log(a);
// a=0

//let声明的变量在词法环境中，在没赋值前词法环境处于隐匿状态，
// let a = 1
// if (true) {
//     console.log(a);//暂时性死区
//     let a = 2
// }

// var a=2
// console.log(window.a);

const a = 1
a = 2
console.log(a);//报错  ,a的地址变了

const obj = {
    name:1
}
obj.name = 2
console.log(obj);//输出2  地址没变