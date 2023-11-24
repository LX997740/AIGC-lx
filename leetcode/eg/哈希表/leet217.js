/**
 * @func  存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 * @author lx
 */
const nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true
        }else{
            map.set(nums[i],1)
        }
    }
    return false
};