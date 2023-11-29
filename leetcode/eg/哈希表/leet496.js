/**
 * @func 496. 下一个更大元素 I
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @author lx
 */
const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
var nextGreaterElement = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    let res = []
    for (let i = 0; i < m; ++i) {
        let j = 0;
        while (j < n && nums2[j] !== nums1[i]) {
            ++j;
        }
        let k = j + 1;
        while (k < n && nums2[k] < nums2[j]) {
            ++k;
        }
        res.push( k < n ? nums2[k] : -1)
    }
    return res
};
console.log(nextGreaterElement(nums1, nums2));