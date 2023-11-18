function foo(){
    console.log(arguments);//类数组  arguments函数里面所有参数的集合
    
    console.log(Array.from(arguments));
}
foo(1,2,3)

let arr = [1,2,3,5]

console.log(...arr); //解构  把数组中的元素全掏出来