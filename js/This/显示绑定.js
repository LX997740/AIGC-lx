function foo(n, m) {
  console.log(this.a, n, m);
}
var obj = {
  a: 2,
};
// foo 的this显示绑定到obj上
// foo.call(obj, 100, 200);
// foo.apply(obj, [100, 200]);
//bind的执行会返回一个函数体,必须要再次调用才能执行掉
var bar = foo.bind(obj)();
bar(100, 200);
