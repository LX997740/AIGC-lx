/**
 * @func 长度最小的子数组
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @author lx
 */
const target = 7, nums = [2, 3, 1, 2, 4, 3]

var minSubArrayLen = function (target, nums) {
    if (nums[0] >= target) {
        return 1
    }
    if (nums.length <= 1) {
        return 0
    }

    let start = 0, end = 1
    let total = nums[0] + nums[1]
    let len = 0

    while (end >= start && end < nums.length) {

        if (total < target) {
            end++
            total = total + nums[end]

        } else if (total >= target) {
            if (len == 0) {
                len = end - start + 1
            }
            total = total - nums[start]
            len = Math.min(end - start + 1, len)
            start++
        }
    }
    return len === -1 ? 0 : len
};
console.log(minSubArrayLen(target, nums));