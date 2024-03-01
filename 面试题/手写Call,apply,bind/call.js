// 为Function.prototype添加一个名为myCall的方法
Function.prototype.mycall = function (thisArg, ...args) {
  // 创建一个Symbol类型的key
  const key = Symbol("key");
  // 将this绑定到thisArg的key上
  thisArg[key] = this;
  // 调用thisArg的key方法，并传入args作为参数
  const res = thisArg[key](...args);
  // 删除thisArg的key
  delete thisArg[key];
  // 返回调用结果
  return res;
};