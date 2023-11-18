/**
 * @func 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @author lx
 */
const nums = [5], target = 5
var search = function(nums, target) {
    const len = nums.length-1
    let left = 0,right = len
    while(left<=right){
        let mid = Math.floor((right-left+1)/2+left)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
};
console.log(search(nums, target));