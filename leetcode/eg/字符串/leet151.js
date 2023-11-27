/**
 * @func 反转字符串中的单词
 * @param {string} s
 * @return {string}
 * @author lx
 */
const s = " hello  world "
var reverseWords = function (s) {
    // 字符串转数组
    const strArr = Array.from(s);
    // 移除多余空格
    removeExtraSpaces(strArr);
    // 翻转
    reverse(strArr, 0, strArr.length - 1);


    let start = 0;

    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            // 翻转单词
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }

    return strArr.join('');
}

// 删除多余空格
function removeExtraSpaces(strArr) {
    let slow = 0
    console.log(strArr);
    for (let fast = 0; fast < strArr.length; fast++) {
        if (strArr[fast] != ' ') { //遇到非空格就处理，即删除所有空格。
            if (slow != 0) {
                strArr[slow++] = ' ';
            } //手动控制空格，给单词之间添加空格。slow != 0说明不是第一个单词，需要在单词前添加空格。
            while (fast < strArr.length && strArr[fast] != ' ') { //补上该单词，遇到空格说明单词结束。
                strArr[slow++] = strArr[fast++];
            }
        }
    }
    strArr.length = slow
    console.log(strArr);
}
// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
        // 交换
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
}
reverseWords(s)