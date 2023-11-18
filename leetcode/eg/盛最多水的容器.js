/**
 * @func 最大的面积
 * @param  height
 * @returns maxarea
 * @author lx
 */
let height=[1,8,6,2,5,4,8,3,7]
//双层循环暴力解法
// var maxArea = function(height) {
//     let maxarea = 0
//     for(let i = 0;i<height.length;i++){
//         for(let j = 0;j<height.length;j++){
//             area = (j-i)*Math.min(height[i],height[j])
//             if(area>maxarea){
//                 maxarea = area
//             }
//         }
//     }
//     return maxarea
// };

var maxArea = function(height) {
    let right = height.length-1
    let left = 0
    let maxarea = 0
    while(left<right){
        area = (right-left)*Math.min(height[right],height[left])

        if(area>maxarea){
            maxarea = area
        }

        if(height[left]<height[right])
            left++
        else 
            right--
    }
    return maxarea
};
console.log(maxArea(height));