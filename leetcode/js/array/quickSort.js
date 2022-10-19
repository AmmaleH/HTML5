// JS V8: 当数组长度小于等于10的时候，采用插入排序，大于10的时候，采用快排。
// java jdk1.7开始使用双轴快排，
// 归并（>287且排序性好， 不好用双轴快排）+双轴快排+插入（jdk1.7 <27, jdk1.8 <47） 实现

// 双轴快排1
// 两个哨兵
function dualPivotQuickSort(arr) {
    if (arr.length < 2) return arr;
    // var pivot1 = Math.floor(Math.random() * arr.length);
    var pivot1 = Math.floor(arr.length / 2);
    var pivotNum1 = arr.splice(pivot1, 1)[0];
    // var pivot2 = Math.floor(Math.random() * arr.length);
    var pivot2 = Math.floor(arr.length / 2);
    var pivotNum2 = arr.splice(pivot2, 1)[0];
    var left = [], mid = [], right = [];
    if (pivotNum1 > pivotNum2) {
        let temp = pivotNum1;
        pivotNum1 = pivotNum2;
        pivotNum2 = temp;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < pivotNum1) left.push(arr[i]);
        else if (arr[i] > pivotNum2) right.push(arr[i]);
        else mid.push(arr[i]);
    }
    return dualPivotQuickSort(left).concat([pivotNum1]).concat(dualPivotQuickSort(mid)).concat([pivotNum2], dualPivotQuickSort(right));
}

// 单轴快排
// 快速排序算法1，定下一个哨兵，分别将 <= 和 > 哨兵对应元素的值存入 left 和 right 数组中。
// 之后递归处理 left 和 right 数组。
function quickSort1(arr) {
    var len = arr.length;
    if (len < 2) return arr;
    var pivot = Math.floor(Math.random() * len);
    var pivotNum = arr.splice(pivot, 1)[0];
    // return pivotNum;
    var left = [], right = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > pivotNum) right.push(arr[i]);
        else left.push(arr[i]);
    }
    return quickSort1(left).concat([pivotNum], quickSort1(right));
}

// 经典三段式快排
function quickSort2(arr) {
    var len = arr.length;
    return qs(arr, 0, len - 1);
}
function qs(arr, begin, end) {
    if (arr.length < 2 || begin >= end) return arr;
    var midIndex = partition2(arr, begin, end);
    if (midIndex > begin) qs(arr, begin, midIndex - 1);
    if (midIndex < end) qs(arr, midIndex + 1, end);
    return arr;
}
// 分治1， 双指针同侧开始
function partition1(arr, begin, end) {
    var pivot = Math.floor(Math.random() * (end - begin) + begin);
    var pivotNum = arr[pivot];
    swap(arr, pivot, end);
    var l = r = begin;
    while (r < end) {
        if (arr[r] <= arr[end]) {
            swap(arr, l++, r);
        }
        r++;
    }
    swap(arr, l, end);
    return l;
}
// 分治2， 双指针头尾相向而行
function partition2(arr, begin, end) {
    var pivot = Math.floor(Math.random() * (end - begin) + begin);
    var pivotNum = arr[pivot];
    swap(arr, begin, pivot);
    var l = begin + 1, r = end;
    while (l < r) {
        while (arr[l] <= pivotNum) l++;
        while (arr[r] > pivotNum) r--;
        if (l < r) swap(arr, l++, r--);
    }
    if (arr[r] < pivotNum) {
        swap(arr, begin, r);
        return r;
    }
    return r;
}
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

var test = [3, 5, 1, 4, 7, 9, 8, 2, 6];
// console.log(dualPivotQuickSort([3, 5, 1, 4, 7, 9, 8, 2, 6]));
var arr = [0, 1, 2, 3, 4, 0, 3, 3, 8, 1, 4, 6, 2, 8, 8, 15, 10, 0, 9, 9, 1, 2, 17, 8, 17, 25, 18, 18, 16, 13, 18, 29, 2, 3, 32, 2, 26, 23, 18, 8, 34, 8, 11, 36, 36, 39, 46, 30, 21, 25, 21, 14, 41, 10, 31, 55, 45, 16, 33, 47, 4, 52, 59, 60, 1, 43, 42, 10, 12, 56, 12, 27, 22, 52, 38, 12, 41, 42, 71, 5, 42, 76, 8, 3, 31, 65, 11, 29, 28, 68, 33, 50, 73, 87, 22, 68, 31, 1, 38, 89];
var arr1 = [0, 1, 1, 1, 2, 4, 4, 6, 2, 6, 6, 8, 7, 7, 11, 14, 10, 10, 16, 7, 15, 19, 10, 12, 10, 3, 20, 13, 11, 26, 26, 20, 7, 15, 31, 14, 30, 4, 19, 21, 26, 28, 30, 5, 22, 13, 30, 21, 3, 32, 0, 47, 12, 23, 6, 40, 49, 54, 29, 12, 45, 29, 48, 55, 38, 18, 0, 4, 61, 30, 66, 59, 70, 17, 49, 17, 10, 73, 22, 46, 20, 72, 0, 78, 71, 30, 86, 12, 23, 64, 5, 86, 57, 67, 66, 26, 55, 24, 19, 24];
console.log(quickSort2(arr1));
// console.log(quickSort1(test));