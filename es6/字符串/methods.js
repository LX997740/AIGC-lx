let str = 'abcdefg'

console.log(str[2]);
console.log(str.at(2));//读下标为2的元素
console.log(str.startsWith('ab'));


let obj = {
    a:1,
    b:2
}

//对象转字符串
let s3 = JSON.stringify(obj)
console.log(s3);
//字符串转成对象
console.log(JSON.parse(s3));