/**
 * @func 统计和小于目标的下标对数目
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @author lx
 */
const nums = [-1,1,2,3,1], target = 2
//双层for暴力解
var countPairs1 = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] < target && i<j){
                count++
            }
        }
    }
    return count;
};
//双指针
var countPairs = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let left =0, count = 0;right = nums.length-1
    for(left; left < right; left++){
        while(left < right && nums[left] + nums[right] >= target){
            right--
        }
        count += right - left
    }
    return count;
};
console.log(countPairs(nums, target));