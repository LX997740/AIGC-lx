digits = [2,9,9]
var plusOne = function(digits) {
    for(var i = digits.length-1 ;i >=0;i--){
        
        if(i==digits.length-1){
            digits[i]++
        }
        if(digits[i] ==10){
            digits[i] = 0;
            if(i-1<0){
                digits.unshift(1)
            }else{
                digits[i-1]++
            }
        }
        
    }
    return digits
};
console.log(plusOne(digits));