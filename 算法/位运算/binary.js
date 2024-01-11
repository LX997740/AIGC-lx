let a = 13

let b = 1101

console.log(parseInt(b, 2),parseInt(b,10));

const arr = [1,2,3]
const newArr = arr.map((item,i)=>{
    return parseInt(item,i)
})

console.log(newArr);