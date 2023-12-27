// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   get toString() {
//     return "(" + this.x + "," + this.y + ")";
//   }
//   static foo() {
//     //静态方法 静态方法只能通过类名调用，实例对象不能访问
//     console.log("foo");
//   }
// }
// let p = new Point(1, 2);
// console.log(p.toString);

class Point {
  _count = 0;

  get value() {
    return this._count;
  }
  set value(val) {
    console.log(val, "-----");
    this._count = val;
  }
}
let p = new Point();
console.log(p.value);
p.value = 10;
