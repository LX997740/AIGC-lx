function fn(a){
    console.log(a);//function a(){}
    var a = 123
    console.log(a);//123
    function a(){}//函数声明
    console.log(a);//123
    var b = function(){}//函数表达式
    console.log(b);//function(){}
    function d(){}
    var d = a
    console.log(d);//123
}
// 1.生成一个AO对象
// AO:{
//     //2.找形参和变量声明,将变量声明和形参作为AO的属性名,值为undefind
//     //3. 将实参和形参值统一
//     //4. 在函数体内找函数声明,将函数名作为AO对象的属性名,值赋予函数体
//     a : undefined 1  function a(){} 123 ,
//     b : undefined function(){},
//     d : undefined function d(){}  123,

// }
fn(1)