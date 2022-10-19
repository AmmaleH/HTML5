/**
 * 输入：整数数组arr, 整数M
 * 输出：arr中两数之和 <= M 的两个数一共有多少对
 */

var pair = function (arr, M) {
    const len = arr.length;
    arr.sort((a, b) => a - b);
    let i = 0, j = len - 1, res = 0;
    while (i < j) {
        while (arr[i] + arr[j] > M) j--;
        if (i < j) {
            res += j - i;
            i++;
        }
    }
    return res;
}
var arr = [1, 2, 3, 4, 5];
console.log(pair(arr, 5));