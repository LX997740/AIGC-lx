/**
 * @func 排列硬币
 * @param {number} n
 * @return {number}
 * @author lx
 */
const n = 5
var arrangeCoins = function(n) {
    let left = 1,right = n//left为最少阶级数,right为最大阶级数
    
    while(left<right){
        let mid = Math.floor((right-left+1)/2)+left//mid为要求阶级数
        if(mid*(mid+1) <=2*n){
            left = mid
        }else {
            right = mid-1   
        }
    }
    return left
};



console.log(arrangeCoins(n));