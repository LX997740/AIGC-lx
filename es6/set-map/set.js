// let arr = [1,1,2,3,3]
// let obj = {
//     a:1,
//     b:1,
//     c:1
// }


//数组去重
// let arr = [1,1,2,1,'1']
// // function unique(arr){
// //     // return Array.from(new Set(arr))
// //     return [...new Set(arr)]
// // }
// var unique = (arr)=>[...new Set(arr)]
// console.log(unique(arr));



let set = new Set([1,2,3,4])

// console.log(set.add(5));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.clear());
//set遍历
// set.forEach((item,index,set)=>{
//     console.log(item,index,set);
// })
// console.log(set.has(2));   //判断set里有没有2
//console.log(set.keys());   //拿到set所有的键名
//console.log(set.values());   //拿到set所有的键值
for (let item of set.entries()) {
    console.log(item);
}