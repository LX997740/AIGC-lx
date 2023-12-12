/**
 * @func 找出数组中的串联值
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {

    let res = 0
    while (nums.length > 1) {
        let left = 0, right = nums.length - 1
        res += Number(nums[left].toString() + nums[right].toString())

        nums.shift()
        nums.pop()


    }
    console.log(res, nums)
    if (nums.length ===0) {
        return res
    } else {
        return res = res + nums[0]
    }
};