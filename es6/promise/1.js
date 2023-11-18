//回调
function a(cb){
    setTimeout(()=>{
        console.log(111);
        cb()
    },1000)
    
}
function b(){
    setTimeout(()=>{
        console.log(222);
    },0)
    
}
a(b)

