var nums = [2,7,11,15], target = 9
// var twoSum = function(nums, target) {
//     for(var i = 0;i<nums.length;i++){
//         for(var j = 0;j<nums.length;j++){
//             if(i!==j && target == nums[i]+nums[j])
//             return [i,j]    
//         }
//     }
// };

// var twoSum = function(nums,target){
//     for(var i = 0;i<nums.length;i++){
//         var substract = target-nums[i]
//         var j = nums.indexOf(substract)
//         if(i!==j && j!==-1){
//             return [i,j]
//         }
//     }
// }
var twoSum = function(nums,target){
    var obj = {}
    for(var i = 0 ;i<nums.length;i++){
        if(obj[target-nums[i]]!==undefined){
            return [obj[target-nums[i]],i]
        }else{
            obj[nums[i]]=i
        }
    }
}
console.log(twoSum(nums,target));