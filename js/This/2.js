// var a = 1;
// function foo() {
//   console.log(this.a);
// }
// foo();

function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}
foo();
