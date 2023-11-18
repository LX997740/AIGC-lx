/**
 * @func 搜索插入位置
 * @param  num 
 * @returns index
 * @author lx
 */
var nums = [1,3,5,6], target = 2
var searchInsert = function(nums, target) {
    let n = nums.length
    let left = 0,right = n-1
    let index = n
    while(left<=right){
        let mid = Math.floor((right-left)/2)+left //寻找数组的中间位置
        if(target<=nums[mid]){
            index = mid
            right = mid-1
        }else{
            left  =mid + 1
        }
    }
    return index
};
console.log(searchInsert(nums,target));