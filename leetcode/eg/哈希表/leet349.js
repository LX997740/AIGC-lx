/**
 * @func 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @author lx
 */
const nums1 = [], nums2 = [2,2]

var intersection = function(nums1, nums2) {
    let arr = []
    let set1 = new Set(nums1), set2 = new Set(nums2);
    console.log(set1,set2);
    for(let key of set1){
        if(set2.has(key)){
            arr.push(key)
        }
    }
    return arr
};
//优化
var intersection = function(nums1, nums2) {

};
console.log(intersection(nums1, nums2));