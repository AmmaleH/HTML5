/**
 * 整数数组中最大乘积子数组
 * @param {Array} pArr 
 * @param {Number} arrLen 
 * @returns {Number} dp[arrLen - 1]
 */
function findMaxProduct(pArr, arrLen) {
    const dp = new Array(arrLen + 1);
    dp[0] = pArr[0];
    for (let i = 1; i < arrLen; i++) {
        if (pArr[i] >= 0) {
            if (dp[i - 1] <= 0) dp[i] = pArr[i];
            else dp[i] = dp[i - 1] * pArr[i];
        } else {
            dp[i] = dp[i - 1] * pArr[i];
        }
    }
    return dp[arrLen - 1];
}
// console.log(findMaxProduct([2, -8, 3, 6], 4));