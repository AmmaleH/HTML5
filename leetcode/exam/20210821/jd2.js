/**
 * 熊猫切竹子
 * 输入：n a b c。n表示竹子的长度，a b c分别表示可以切分的长度。
 * 输出：最多可以分割的段数。要保证每一段的长度属于[a,b,c]
 * 分析：背包问题，动态规划
 */

var splitNum = function (n, arr) {
    var dp = new Array(n + 1);
    dp.fill(-1);
    dp[0] = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = arr[i]; j <= n; j++) {
            dp[j] = Math.max(dp[j], dp[j - arr[i]] + 1);
        }
    }
    return dp[n];
}
var arr = [2, 3, 4];
console.log(splitNum(6, arr));
