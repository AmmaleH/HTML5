/**
 * 输入： 两个整数 n k   1 <= n <= 26
 * 说明： 字符串的 Sn 的形成规则如下：Li表示26个字母 a-z，S1 = "a"  Si = Si-1 + Li + reverse(invert(Si-1))
 *       reverse表示翻转字符串，invert表示翻转字母，如 invert("a")="z",invert("y")="b"
 * 输出：Sn 的第 k 个字符
 */
function invert(ch) {
    var num = ch.charCodeAt();
    return String.fromCharCode(97 + 122 - num);
}

function reverse_invert(str) {
    let len = str.length, res = "";
    for (let i = len - 1; i >= 0; i--) {
        res += invert(str[i]);
    }
    return res;
}

function findKthChar(n, k) {
    const dp = [];
    dp[1] = "a";
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + String.fromCharCode(96 + i) + reverse_invert(dp[i - 1]);
    }
    return dp[n][k - 1];
}
console.log(findKthChar(3, 1));
