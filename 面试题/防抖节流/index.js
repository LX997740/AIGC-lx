function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    let _this = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}

function throttle(fn, wait) {
  let timer = undefined;
  let _this = this;
  return function (...args) {
    if (timer !== undefined) {
      return;
    } else {
      fn.apply(_this, args);
      timer = setTimeout(function () {
        timer = undefined;
      }, wait);
    }
  };
}
