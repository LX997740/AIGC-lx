// 1.定义mycall方法
// 2.设置this并调用原函数
// 3.接受剩余参数并返回结果

//1.定义mycall方法
Function.prototype.mycall = function (thisArg, ...args) {
  // 2.设置this并调用原函数
  //thisArg 传入的设置this的对象
  //   this 原函数的this
  const key = Symbol("key");
  thisArg[key] = this;
  // 3.接受剩余参数并返回结果
  const res = thisArg[key](...args);
  delete thisArg.f;
  return res;
};

Function.prototype.mycall2 = function (thisArg, ...args) {
  const key = Symbol("key");
  thisArg[key] = this;
  const res = thisArg[key](...args);
  delete thisArg[key];
  return res;
};
