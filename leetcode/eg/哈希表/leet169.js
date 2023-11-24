/**
 * @func 多数元素
 * @param {number[]} nums
 * @return {number}
 * @author lx
 */
const nums = [3, 2, 3]
var majorityElement = function (nums) {
    let len = nums.length
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        if (value > Math.floor(len / 2)) {
            return key
        }
    }
};