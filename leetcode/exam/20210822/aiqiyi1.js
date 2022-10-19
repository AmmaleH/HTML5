function reverse(str, begin, end) {
    var arr = Array.from(str);
    while (begin < end) {
        let temp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = temp;
        begin++;
        end--;
    }
    return arr.join("");
}
console.log(reverse("abcdefghijk", 2, 4));