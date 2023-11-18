let num = 1121
let count = 0
/**
 * @func 统计能整除num的位数
 * @param  num 
 * @returns count
 * @author lx
 */
var countDigits = function(num) {
    let count = 0
    var val = num
    while(val){
        //num从个位往前数的每一位位数
        if(num%(val%10) == 0){
            count++
        }
        val = Math.floor(val/10) 
    }
    return count
};
console.log(countDigits(num));
