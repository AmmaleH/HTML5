function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) return arr;
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var res = [];
    var lLen = left.length, rLen = right.length;
    var len = lLen + rLen;
    for (let i = 0, l = 0, r = 0; i < len; i++) {
        if (l >= lLen) res.push(right[r++]);
        else if (r >= rLen) res.push(left[l++]);
        else if (left[l] < right[r]) res.push(left[l++]);
        else res.push(right[r++]);
    }
    return res;
}

var test = [5, 2, 6, 4, 9, 7, 8, 1, 3];
console.log(mergeSort(test));