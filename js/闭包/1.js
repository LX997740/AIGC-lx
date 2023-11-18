var arr = []
for (var i = 0; i <10; i++) {
    
    (function(k){
        arr[i] = function(){
            console.log(k);
        }
    })(i)

}

//------
for(var j = 0;j<arr.length;j++){
    arr[j]()
}



//立即执行函数
// (function(){
//     console.log(123);
// })()