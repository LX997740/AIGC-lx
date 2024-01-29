//定义一个mybind方法
Function.prototype.mybind = function (thisArg, ...args) {
  //返回绑定this的函数
  return (...reArgs) => {
    return this.call(thisArg, ...args, ...reArgs);
  };
};
