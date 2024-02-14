function mynew(Func, ...args) {
  // 1.创建一个新对象
  // 2.新对象原型指向构造函数原型对象
  // 3.将构建函数的this指向新对象
  // 4.根据返回值判断
  let obj = {};
  obj._proto_ = Func.prototype;
  let res = Func.apply(obj, args);
  return res instanceof Object ? res : obj;
}
