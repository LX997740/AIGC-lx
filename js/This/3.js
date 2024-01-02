var b = 2;
// function foo() {
//   var b = 1;
//   bar();
// }
// function bar() {
//   baz();
// }
// function baz() {
//   console.log(this.b);
// }
// foo();
function foo() {
  var b = 1;
  bar();
  function bar() {
    baz();
  }
  function baz() {
    console.log(this.b);
  }
}

foo();
