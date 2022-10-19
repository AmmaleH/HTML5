function method(arr) {
    let len = arr.length;
    if (len < 2) return true;
    if (arr[1] != 1) return false;
    var set = new Set(arr);
    let end = 1, maxLocation = 0, d = 1;
    let i = 1;
    while (i < len) {
        if (set.has(arr[i] + d + 1)) maxLocation = Math.max(maxLocation + d + 1, arr[i] + d + 1);
        else if (set.has(arr[i] + d)) maxLocation = Math.max(maxLocation + d, arr[i] + d);
        else if (set.has(arr[i] + d - 1)) maxLocation = Math.max(maxLocation + d - 1, arr[i] + d - 1);
        else return false;
        let index = arr.indexOf(maxLocation);
        d = arr[index] - arr[i];
        if (i == end) end = index;
        if (index == len - 1) return true;
        i++;
    }
    return false;
}
console.log(method([0, 1, 3, 5, 6, 8, 12, 17, 21]));   // true
// console.log(method([0, 1, 2, 3, 4, 8, 9, 11]));   // false