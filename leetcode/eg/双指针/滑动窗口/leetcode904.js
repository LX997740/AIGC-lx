/**
 * @func 水果成蓝
 * @param {number[]} fruits
 * @return {number}
 * @author lx
 */
const fruits = [1,2,1]
var totalFruit = function(fruits) {
    let start=0,end=1,count=0
    if(fruits.length<=1){
        return fruits.length
    }
    while (end >= start && end < nums.length) {
        if(fruits[start]!==fruits[end]){
            count++
        }
        if (count<=2) {
            end++
            total = total + nums[end]

        } else if (count>2) {
            if (len == 0) {
                len = end - start + 1
            }
            total = total - nums[start]
            len = Math.min(end - start + 1, len)
            start++
        }
    }
};
console.log(totalFruit(fruits));