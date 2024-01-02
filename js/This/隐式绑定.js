function foo() {
  console.log(this.a);
}

// var obj = {
//     a: 2,
//     foo: foo
// }
// obj.foo(); // this指向obj

// var obj = {
//   a: 2,
//   foo: foo(), //this指向window
// };
// obj.foo;

var obj = {
  a: 2,
  foo: foo,
};
var obj2 = {
  a: 3,
  obj: obj,
};
obj2.obj.foo();//2  隐式丢失
