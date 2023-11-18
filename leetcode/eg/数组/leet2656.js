/**
 * @func k个最大元素和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @author lx
 */
const nums = [1,2,3,4,5], k = 3
var maximizeSum = function(nums, k) {
    let max = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>max){
            max = nums[i]
        }
    }
    console.log(max);
    let total = k*(max+max+k-1)
    return total/2
};
console.log(maximizeSum(nums,k));