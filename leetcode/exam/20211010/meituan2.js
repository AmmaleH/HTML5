function method(arr, m) {
    arr = arr.sort((a, b) => a - b);
    var res = 0, i = 0, j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] > m) {
            j--;
        } else {
            res += j - i;
            i++;
        }
    }
    return res;
}
console.log(method([1, 2, 2, 6, 8, 10], 10));