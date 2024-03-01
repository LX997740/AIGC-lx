function sumMarker(length) {
  let nums = []; // 存储累加的数字
  function sum(...args) {
    
    nums.push(...args); // 将传入的数字加入到累加数组中
    if (nums.length >= length) {
      // 当累加的数字个数达到指定长度时
      const res = nums.splice(0, length).reduce((pre, cur) => pre + cur, 0); // 从累加数组中取出指定长度的数字，进行累加，并返回累加结果
      nums = []; // 清空累加数组
      return res; // 返回累加结果
    } else {
      return sum; // 当累加的数字个数未达到指定长度时，返回自身，继续累加
    }
  }
  return sum; // 返回求和函数
}
