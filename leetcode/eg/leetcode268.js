/**
 * @func 丢失的数字
 * @param {number[]} nums
 * @return {number}
 * @author lx
 */
let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
var missingNumber = function(nums) {
    const len = nums.length
    nums.sort(function(a,b){return a-b})
    console.log(nums);
    for(let i = 0;i<=len;i++){
        if(nums[i] !==i){

            return i    
        }
    }
};
console.log(missingNumber(nums));