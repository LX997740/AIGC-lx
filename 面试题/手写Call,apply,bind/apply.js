// 1.定义myapply方法
// 2.设置this并调用原函数
// 3.接受剩余参数并返回结果

// 1.定义myapply方法
Function.prototype.myapply = function (thisArg, args) {
  const key = Symbol("key");
  thisArg[key] = this;
  const res = thisArg[key](args);
  delete thisArg[key];
  return res;
};
