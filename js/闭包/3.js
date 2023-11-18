function a(){
    function b(){
        var bbb =111
        console.log(aaa);
    }
    aaa = 123
    return b
}
var c = a()
c()