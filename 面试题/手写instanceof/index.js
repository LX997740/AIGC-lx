/**
 * 判断一个对象是否是另一个对象的实例
 * @param {*} left - 待判断的对象
 * @param {*} right - 参考的对象
 * @returns {boolean} - 如果是实例则返回true，否则返回false
 */
function myInstanceof(left, right) {
  // 如果left不是对象或者为null，则直接返回false
  if (typeof left !== "object" || left == null) {
    return false;
  }
  // 获取left的原型
  let proto = Object.getPrototypeOf(left);
  // 循环判断直到找到null为止
  while (true) {
    // 如果原型为null，则说明left不是right的实例，返回false
    if (proto === null) {
      return false;
    }
    // 如果原型为right的原型，则说明left是right的实例，返回true
    if (proto === right.prototype) {
      return true;
    }
    // 获取当前原型的原型
    proto = Object.getPrototypeOf(proto);
  }
}