/**
 * @func 判断是否为完全平方数
 * @param {number} num
 * @return {boolean}
 * @author lx
 */
let num  = 14
var isPerfectSquare = function(num) {
    let left = 0,right = num
    
    if(num == 1){
        return true
    }
    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)
        console.log(mid);
        let square = mid*mid
        if(square<num){
            left = mid+1
        }else if(square>num){
            right = mid-1
        }else{
            return true
        }
    }
    return false
};
console.log(isPerfectSquare(num));