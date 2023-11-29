/**
 * @func 70. 爬楼梯
 * @param {number} n
 * @return {number}
 * @author lx
 */
let n = 99
var climbStairs = function (n) {
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {//爬i个台阶的最小次数
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
console.log(climbStairs(n));
//找状态转移方程