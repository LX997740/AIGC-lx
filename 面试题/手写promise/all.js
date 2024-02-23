class MyPromise {
  /**
   * 将多个Promise对象合并为一个新的Promise对象
   * @param {Array} promises - 包含多个Promise对象的数组
   * @returns {MyPromise} - 合并后的Promise对象
   */
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let resolvedCount = 0;
      const values = new Array(promises.length);
      for (let i = 0; i < promises.length; i++) {
        if (!MyPromise.isPromise(promises[i])) {
          reject(new TypeError("Expected a Promise"));
          break;
        }

        // 处理每个Promise
        promises[i].then(
          (value) => {
            resolvedCount++;
            values[i] = value;

            // 当所有Promise都成功时，resolve结果数组
            if (resolvedCount === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            // 只要有一个Promise失败，就reject整个Promise.all的结果
            reject(reason);
          }
        );
      }
    });
  }

  /**
   * 判断是否为Promise对象
   * @param {*} value - 待判断的对象
   * @returns {boolean} - 是否为Promise对象
   */
  static isPromise(value) {
    return (
      value instanceof MyPromise ||
      (typeof value === "object" &&
        value !== null &&
        typeof value.then === "function")
    );
  }
}
