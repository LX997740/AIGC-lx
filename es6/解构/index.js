// let arr = ['a', 'b', 'c', 'd', 'e']
// let [x,y,z] = ['a', 'b', 'c', 'd', 'e']

// console.log(x,y,z);
//数组解构
let arr = [1,2,3]
let newArr=[0]
console.log([...newArr,...arr]);


//对象解构
let obj = {name:1,age:19}
let {name='333',age} = {name:1,age:19}
console.log(name,age);