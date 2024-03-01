class MyPromise {
  constructor(callback) {
    // 初始化状态为pending
    this.status = "pending";
    // 初始化值
    this.value = undefined;
    // 初始化原因
    this.reason = undefined;
    // 存储成功状态的回调函数数组
    this.onResolvedCallbacks = [];
    // 存储失败状态的回调函数数组
    this.onRejectedCallbacks = [];

    // 定义resolve函数，用于将状态从pending变为resolved
    const resolve = (value) => {
      if (this.status == "pending") {
        this.status = "resolved";
        this.value = value;
        // 执行所有成功状态的回调函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    // 定义reject函数，用于将状态从pending变为rejected
    const reject = (reason) => {
      if (this.status == "pending") {
        this.status = "rejected";
        this.reason = reason;
        // 执行所有失败状态的回调函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      // 调用传入的回调函数，并传入resolve和reject函数
      callback(resolve, reject);
    } catch (error) {
      // 如果回调函数抛出异常，则调用reject函数
      reject(error);
    }
  }

  then(onResolved, onRejected) {
    // 如果onResolved是函数，则直接使用，否则默认为返回值不变的函数
    onResolved =
      typeof onResolved === "function"
        ? onResolved
        : (value) => {
            return value;
          };
    // 如果onRejected是函数，则直接使用，否则默认为抛出异常的函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    // 创建一个新的Promise对象
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status == "resolved") {
        try {
          // 如果当前状态为resolved，则调用onResolved函数处理值
          const x = onResolved(this.value);
          resolve(x);
        } catch (error) {
          // 如果onResolved函数抛出异常，则调用reject函数
          reject(error);
        }
      }
      if (this.status == "rejected") {
        try {
          // 如果当前状态为rejected，则调用onRejected函数处理原因
          const x = onRejected(this.reason);
          resolve(x);
        } catch (error) {
          // 如果onRejected函数抛出异常，则调用reject函数
          reject(error);
        }
      }
      if (this.status == "pending") {
        // 如果当前状态为pending，则将回调函数添加到对应的数组中
        this.onResolvedCallbacks.push(() => {
          if (this.status == "resolved") {
            try {
              // 如果当前状态变为resolved，则调用onResolved函数处理值
              const x = onResolved(this.value);
              resolve(x);
            } catch (error) {
              // 如果onResolved函数抛出异常，则调用reject函数
              reject(error);
            }
          }
        });
        this.onRejectedCallbacks.push(() => {
          if (this.status == "rejected") {
            try {
              // 如果当前状态变为rejected，则调用onRejected函数处理原因
              const x = onRejected(this.reason);
              resolve(x);
            } catch (error) {
              // 如果onRejected函数抛出异常，则调用reject函数
              reject(error);
            }
          }
        });
      } else {
        // 执行完所有回调函数之后，清空回调数组
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
      }
    });
    // 返回新的Promise对象
    return promise2;
  }
  
  catch(onRejected) {
    // 等同于then(null, onRejected)
    return this.then(null, onRejected);
  }
}
