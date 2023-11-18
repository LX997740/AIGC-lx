/**
 * @func 求x的平方根 
 * @param {number} x
 * @return {number}
 * @author lx
 */
let x = 8

var mySqrt = function(x) {
    let left = 1,right = x
    let a = 0 //x的算术平方根

    while(left<=right){
        let mid =Math.floor(left+(right-left)/2)//求中位数 避免溢出 等价于 (right+left)/2

        if(mid*mid<=x){
            if((mid+1)*(mid+1)>x){
                return a = mid
            }
            left = mid+1
            
        }else{
            right = mid-1
        }
    }
    return 0
};

console.log(mySqrt(x));