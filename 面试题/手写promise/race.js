class MyPromise {
  // ... 其他Promise的相关代码 ...

  /**
   * 执行一组Promise中的第一个完成（resolve或reject）的Promise
   * @param {Array} promises - Promise对象数组
   * @returns {MyPromise} - 新的Promise实例
   */
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        if (!MyPromise.isPromise(promises[i])) {
          reject(new TypeError("Expected a Promise"));
          break;
        }

        // 当任何一个Promise resolve或reject时，立即结束新Promise的状态
        promises[i].then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    });
  }

  // ... 判断是否为Promise对象的方法 ...
}
