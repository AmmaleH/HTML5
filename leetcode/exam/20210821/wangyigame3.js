/**
 * 输入：整数数组arr
 * 描述：arr表示一群小朋友的年龄，围成一圈，当一个小朋友的年龄大于 左右两边的相邻小朋友时
 *      必须分到比周围小朋友更多的纸张，每个小朋友最少分到一张纸，问最少需要多少张纸
 * 输出：需要的最少的纸张数
 */

var pageNum = function (arr) {
    var len = arr.length;
    var left = new Array(len + 1), right = new Array(len + 1);
    left.fill(1);
    right.fill(1);
    arr.unshift(arr[len - 1]);
    for (let i = 0; i < len; i++) {
        if (arr[i + 1] > arr[i]) left[i] = left[i - 1] + 1;
    }
    arr.shift();
    arr.push(arr[0]);
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) right[i] = right[i + 1] + 1;
    }
    var res = 0;
    for (let i = 0; i < len; i++) {
        res += Math.max(left[i], right[i]);
    }
    return res;
}

var arr = [1, 1, 1];
var arr1 = [1, 2, 3];
console.log(pageNum(arr));
