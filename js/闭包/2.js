function foo(){
    var myName = 'xx'
    let test1 = 1
    let test2 = 2
    var innerBar = {
        getName:function(){
            console.log(test1);
            return myName
        },
        setName:function(newName){
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName('uu')
console.log(bar.getName());