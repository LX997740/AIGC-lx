function bar(){
    console.log(myName);//xx
}

function foo(){
    var myName = 'yy'
    bar()
}

var myName = 'xx'

foo()