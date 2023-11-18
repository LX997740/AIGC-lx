// var nums = [-1,0,1,2,-1,-4]
var nums = [0,0,0,0]
var arry=[]
var threeSum = function(nums) {
    //三次循环找出三数之和为0的
    for(var i = 0 ;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            for(var k = j+1;k<nums.length;k++){

                if(nums[i]+nums[j]+nums[k]==0){ 

                    arry.push([nums[i],nums[j],nums[k]])
                    //排序
                    for (var m =0 ;m<arry.length;m++){
                        arry[m].sort(function(a, b){return a - b})
                    }
                    
                }
            }
        }
    }

    for(var n = 0 ;n<arry.length;n++){
        for(var p = n+1;p<arry.length;p++){
            if(isSame(arry[n],arry[p])){
                arry.splice(p,1)
            }

        }
    }
 
    return arry
};


var isSame = function(arr1, arr2) {
    // console.log(arr1,arr2);
    var flag = false

    var j =0
    
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] == arr2[j]){
            flag = true          
            j++      
        }
        else if(arr1[i] !==arr2[j]){
            j++
            flag = false
            break;
        }
    }
    return flag
}


threeSum(nums)

console.log(arry);

