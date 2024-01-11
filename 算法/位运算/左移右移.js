const num = 5;

console.log(num << 1);
console.log(num >> 1);

//如何高效实现一个整数的乘法和除法
function multiply(a, b) {
  let res = 0;
  while (b > 0) {
    if (b & 1) {
      res += a;
    }
    a = a << 1;
    b = b >> 1;
  }
  return res;
}
console.log(multiply(5, 3));
