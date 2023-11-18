/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @func 猜数字大小
 * @param {number} n
 * @return {number} num
 * @author lx
 */

let n = 2, pick = 1
var guessNumber = function(n) {

    let left = 1,right = n
    

    while (left<=right){

        let mid = Math.floor((right-left)/2+left)//5
        let num = mid
        if(guess(num) == -1){
            right = num
            num = mid
        }else if(guess(num) == 1){
            left = num
            num = mid
        }else if(guess(num) == 0){
            return num
        }
    }
};

var guess = function (num){
    if(num >pick){
        return -1
    }else if(num<pick){
        return 1
    }else{
        return 0
    }
}
console.log(guessNumber(n));