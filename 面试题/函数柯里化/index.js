function sumMarker(length) {
  let nums = [];
  function sum(...args) {
    nums.push(...args);
    if (nums.length >= length) {
      const res = nums.splice(0, length).reduce((pre, cur) => pre + cur, 0);
      nums = [];
      return res;
    } else {
      return sum;
    }
  }
  return sum;
}
