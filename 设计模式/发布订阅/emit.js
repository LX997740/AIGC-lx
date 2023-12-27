class EventEmitter {
  constructor() {
    this._events = {}; //"run" : [fun]
  }
  //订阅事件
  on(type, cb) {
    if (!this._events[type]) {
      this._events[type] = [cb];
    } else {
      this._events[type].push(cb);
    }
  }
  //  
  once(type, cb) {
    const fn = (...args) => {
      cb(...args);
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  //发布事件
  emit(type, ...args) {
    if (this._events[type]) {
      this._events[type].forEach((cb) => {
        cb(...args);
      });
    } else {
      console.log("没有这个事件");
      return;
    }
  }
  //取消订阅
  off(type, cb) {
    if (this._events[type]) {
      this._events[type] = this._events[type].filter((item) => item !== cb);
    } else {
      console.log("没有这个事件");
    }
  }
}
let ev = new EventEmitter();
const fn1 = (str) => {
  console.log(str, "fn1");
};
const fn2 = (str) => {
  console.log(str, "fn2");
};
const fn3 = (str) => {
  console.log(str, "fn3");
};

ev.on("run", fn1);
ev.once("run", fn2);
ev.emit("run", "派发了一个事件");
ev.emit("run", "又派发了一个事件");
