// 1.定义myapply方法
// 2.设置this并调用原函数
// 3.接受剩余参数并返回结果

// 1. 定义myapply方法
Function.prototype.myapply = function (thisArg, args) {
  // 使用Symbol作为key，用于存储函数
  const key = Symbol("key");
  // 将函数存储到thisArg对象中
  thisArg[key] = this;
  // 调用存储在thisArg对象中的函数，并传入args参数
  const res = thisArg[key](args);
  // 删除存储在thisArg对象中的函数
  delete thisArg[key];
  // 返回函数调用的结果
  return res;
};