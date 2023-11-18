var a = 2
function add(b,c){
    return b+c
}
function addAll(b,c){
    var d = 10
    res = add(b,c)
    return a+res+d
}
addAll(3,6)
console.log(addAll(3,6));