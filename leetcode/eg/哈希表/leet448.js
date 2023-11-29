/**
 * @func 找出数组中所有没有出现的数字
 * @param {number[]} nums
 * @return {number[]}
 * @author lx
 */
const nums = [4,3,2,7,8,2,3,1]
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums)
    for(let i = 1; i <= nums.length; i++) {
        if(set.has(i)){
            set.delete(i)
        }else{
            set.add(i)
        }
    }
    return [...set]
};
console.log(findDisappearedNumbers(nums))