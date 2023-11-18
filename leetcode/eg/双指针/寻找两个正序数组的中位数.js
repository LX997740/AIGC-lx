nums1 = [-2,-3], nums2 = [3]
var findMedianSortedArrays = function(nums1, nums2) {
    var n = nums1.length+nums2.length
    let nums = nums1.concat(nums2).sort(function(a, b){return a - b})
    console.log(n);
    if(n%2!==0){
        
        return nums[(n-1)/2]
    }else{
        return (nums[n/2]+nums[n/2-1])
    }
};

console.log(findMedianSortedArrays(nums1, nums2));