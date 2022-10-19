var getLeastNumbers = function (arr, k) {
    var len = arr.length, l = 0, r = len - 1;
    if (len <= k) return arr;
    var k1 = partition(arr, l, r);
    while (k1 != k) {
        if (k1 < k) {
            l = k1 + 1;
            k1 = partition(arr, l, r);
        } else if (k1 > k) {
            r = k1 - 1;
            k1 = partition(arr, l, r);
        }
    }
    return arr.slice(0, k);
};

// 快排的分治 返回哨兵索引
const partition = (arr, left, right) => {
    // var pivot = Math.floor((right - left) * Math.random()) + left;
    // swap(arr, left, pivot);   // left与pivot只是索引对应的值交换了，索引没变
    let l = left + 1, r = right;
    while (l < r) {
        while (arr[l] <= arr[left]) {
            l++;
        }
        while (arr[r] > arr[left]) {
            r--;
        }
        if (l < r) {
            swap(arr, l, r);
            l++;
            r--;
        }
    }
    if (arr[left] > arr[r])
        swap(arr, left, r);
    return r;
}
const swap = (arr, left, right) => {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

var arr = [3, 2, 1, 0, 6, 4, 32], k = 3;
var arr1 = [0, 1, 2, 1];
var arr2 = [0, 0, 2, 3, 2, 1, 1, 2, 0, 4];
var arr3 = [0, 1, 1, 2, 4, 4, 1, 3, 3, 2];
var arr4 = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4];
var arr5 = [0, 1, 1, 1, 2, 4, 4, 6, 2, 6, 6, 8, 7, 7,
    11, 14, 10, 10, 16, 7, 15, 19, 10, 12, 10, 3, 20,
    13, 11, 26, 26, 20, 7, 15, 31, 14, 30, 4, 19, 21,
    26, 28, 30, 5, 22, 13, 30, 21, 3, 32, 0, 47, 12,
    23, 6, 40, 49, 54, 29, 12, 45, 29, 48, 55, 38, 18,
    0, 4, 61, 30, 66, 59, 70, 17, 49, 17, 10, 73, 22,
    46, 20, 72, 0, 78, 71, 30, 86, 12, 23, 64, 5, 86,
    57, 67, 66, 26, 55, 24, 19, 24];

console.log(getLeastNumbers(arr5, 32));