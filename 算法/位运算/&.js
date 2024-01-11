const num1 = 5; //101
const num2 = 6; //110

let res = num1 & num2; // 100
console.log(res);

//判断一个数是不是2的次幂数
function test(num) {
  if (num <= 0) {
    return false;
  }
  return (num & (num - 1)) === 0;
}
console.log(test(num2));
