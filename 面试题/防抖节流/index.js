// debounce函数用于延迟执行函数，避免函数被频繁调用
function debounce(fn, wait) {
  let timer = null; // 定义一个定时器变量
  let _this = this; // 保存当前上下文
  return function (...args) {
    if (timer) clearTimeout(timer); // 如果定时器存在，则清除定时器
    timer = setTimeout(function () {
      fn.apply(_this, args); // 调用原函数，并将参数传递给原函数
    }, wait); // 设置定时器，延迟执行原函数
  };
}

// throttle函数用于限制函数的执行频率，避免函数被频繁调用
function throttle(fn, wait) {
  let timer = undefined; // 定义一个定时器变量
  let _this = this; // 保存当前上下文
  return function (...args) {
    if (timer !== undefined) {
      return; // 如果定时器存在，则直接返回，不执行原函数
    } else {
      fn.apply(_this, args); // 调用原函数，并将参数传递给原函数
      timer = setTimeout(function () {
        timer = undefined; // 清除定时器
      }, wait); // 设置定时器，延迟执行清除定时器的操作
    }
  };
}
