let number = 123//number
console.log(Object.prototype.toString.call(number));

console.log(Object.prototype.toString.call(number).slice(8,-1));
//为什么.call能读到一个值
