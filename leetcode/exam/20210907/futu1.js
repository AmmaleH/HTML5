function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) swap(arr, j, j + 1);
        }
    }
    return arr;
}
function swap(arr, i, j) {
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
const arr = [1, 22, 2, 5, 4, 23];
console.log(bubbleSort(arr));