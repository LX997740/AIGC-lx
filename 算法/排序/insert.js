let arr = [5,3,2,4,1]
function insertSort(arr){
    const len = arr.length
    for(let i = 1;i<len;i++){
        for(let j = i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}