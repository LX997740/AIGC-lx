/**
 * @func 有序数组的平方
 * @param {number[]} nums
 * @return {number[]}
 * @author lx
 */
nums = [-4,-1,0,3,10]
//暴力
// var sortedSquares = function(nums) {
//     let Array = []
//     for(let i = 0;i<nums.length;i++){
//         Array.push(nums[i]*nums[i])
//     }
//     Array.sort(function(a,b){
//         return a-b
//     })
//     return Array
// };

//双指针
var sortedSquares = function(nums) {
    let Array = [nums.length]
    let j = nums.length-1,i=0
    let k = nums.length-1
    while(i<=j){
        
        if(nums[i]*nums[i]<nums[j]*nums[j]){
            Array[k]= nums[j]*nums[j]
            k--
            j--
        }else{
            Array[k]= nums[i]*nums[i]
            k--
            i++
        }
    }
    return Array
};
console.log(sortedSquares(nums));