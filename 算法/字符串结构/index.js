let str = 'abcdefg'
//读取字符串的某一个值
console.log(str[2]);
console.log(str.charAt(2));

//增
console.log(str.concat('mn'));
console.log(str+'mn');
console.log(str);

//删
let arr = str.split('')//把字符串分割为数组
arr.splice(4)//从数组下标4一直删
console.log(arr);

let newStr = arr.join('-')//把数组转成字符串
console.log(newStr);