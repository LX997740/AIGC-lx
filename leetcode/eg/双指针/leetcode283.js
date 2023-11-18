/**
 * @func 移动0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @author lx
 */
nums = [0, 0, 1]
// var moveZeroes = function (nums) {
//     const len = nums.length - 1
//     let a = 0, b = 0
//     zero = false
//     for (a = 0; a <= len; a++) {
//         if (zero) {
//             break
//         }
//         if (nums[a] === 0) {
//             nozero = false
//             for (b = a; b + 1 <= len; b++) {
//                 if (nums[b + 1] != 0) {
//                     nozero = true
//                 }
//                 [nums[b], nums[b + 1]] = [nums[b + 1], nums[b]]
//                 // let temp = nums[b]
//                 // nums[b] = nums[b+1]
//                 // nums[b+1]= temp
//             }
//             if (!nozero) {
//                 zero = true
//             }
//             a--
//         }
//     }
//     return nums
// };
var moveZeroes = function (nums) {
    let j =0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j++] =temp
        }
    }
    return nums
}
console.log(moveZeroes(nums));