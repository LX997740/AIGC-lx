-js是弱类型,动态语言

# 全局作用域

# 函数作用域

-变量的查找是可以从内部作用域往外部作用域查找

-编译要干的事，是找到当前域中的有效标识符

# 块级作用域
let 和{}结合会形成块级作用域
-var 声明的变量存在声明提升
{
    console.log(a)
    var a = 2
}
{
    var a
    console.log(a)
    a=2
}

# 欺骗词法作用域
1.eval()将原本不属于此处的代码搬到此处,让代码执行的就像天生就定义在此处一样
function foo(str,a){
    eval(str)//var b = 3
    console.log(a,b);
}
foo("var b = 3",1)
2.with(){} 当with修改对象不存在属性时，会将该属性泄露到全局