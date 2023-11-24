/**
 * @func 存在重复元素 II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * @author lx
 */
const nums = [1,2,3,1], k = 3
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if(Math.abs(i - map.get(nums[i])) <= k){
                return true;
            }else{
                // 重置key为num[i]的索引
                map.set(nums[i], i);
            }
        }else{
            // 添加key为num[i]的索引
            map.set(nums[i], i);
        }
    }
    return false;
};
console.log(containsNearbyDuplicate(nums, k));