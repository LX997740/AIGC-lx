let a = 'hello'
let b = 'world'
let x = 0


let c = a + x + b
let date = new Date()
console.log(date.getFullYear() + '年' + (Number(date.getMonth()) + 1) + '月' + date.getDate() + '日');
let t = `${date.getFullYear()}年${+date.getMonth() + 1}月${date.getDate()}日`
console.log(t);