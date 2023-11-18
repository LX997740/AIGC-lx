let x = 121


// var isPalindrome = function(x) {
//     let y = x.toString()
//     if(y == y.split('').reverse().join('')){
//         return true
//     }else{
//         return false
//     }
// };

//不用字符串
function isPalindrome(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
      return false; // 负数和以0结尾的数不是回文数
    }
  
    let reversedNum = 0;
    let originalNum = num;
    
    //reversedNum 是 originalNum 逆序
    while (originalNum > 0) {
      reversedNum = reversedNum * 10 + originalNum % 10;
      originalNum = Math.floor(originalNum / 10);
    }
  
    return num === reversedNum;
  }
console.log(isPalindrome(x));