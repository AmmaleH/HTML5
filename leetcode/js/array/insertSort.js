function insertSort(arr) {
    var len = arr.length;
    for (let i = 1; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i];
            let j = i;
            while (j > 0 && temp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
        }
    }
    return arr;
}

var test = [3, 7, 1, 6, 9, 8, 4, 2, 5];
console.log(insertSort(test));

