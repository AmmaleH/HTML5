/**
 * 可重子集的大小。
 * 输入：二维整数数组，arr[i][0]表示一个整数，arr[i][1] == 1表示可以成为边界，==0则不可以
 * 描述：不能成为边界的数不可以算在子集里面
 * 输出：最大的子集的大小
 * 例子：[[4,1],[2,0],[8,1],[9,0],[5,0]]  输出：3
 *      在arr[i][1]==1的数中，最小为1，最大为8，而arr[i][1]==0的数中，只有5在4和8之间，
 *      所以子集总共有 3 个数。
 */

function pair(arr) {
    let list0 = [], list1 = [];
    for (ele of arr) {
        if (ele[1] == 0) list0.push(ele[0]);
        else list1.push(ele[0]);
    }
    var res = list1.length;
    var min = list1[0], max = min;
    for (ele of list1) {
        min = min <= ele ? min : ele;
        max = max >= ele ? max : ele;
    }
    for (ele of list0) {
        if (ele > min && ele < max) res++;
    }
    return res;
}

var arr = [[4, 1], [2, 0], [8, 1], [9, 0], [5, 0]];
console.log(pair(arr));