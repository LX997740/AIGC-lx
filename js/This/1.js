// console.log(this);
function identify() {
  return this.name.toUpperCase();
}
function speek() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = {
    name: "Jeff"
}
// var you = {
//     name: "tom"
// }
// console.log(identify(you));
speek.call(me);