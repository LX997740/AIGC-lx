let num1 = 5; // 101
let num2 = 7; // 111

function swap(a, b) {
  a = a ^ b; // a = 101 ^ 111 = 010  //2
  b = a ^ b; // b = 010 ^ 111 = 101  //5
  a = a ^ b; // a = 010 ^ 101 = 111  //7
  return [a, b];
}

[num1, num2] = swap(num1, num2);
console.log(num1, num2); //7,5
