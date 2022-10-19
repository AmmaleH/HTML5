function maxProfit(arr) {
    var minPrice = Number.MAX_VALUE;
    var res = 0;
    arr.forEach(ele => {
        minPrice = Math.min(minPrice, ele);
        res = Math.max(res, ele - minPrice);
    });
    return res;
}

var arr = [10, 12, 15, 20, 9, 16, 19, 23];
var arr1 = [10, 9, 8, 7, 6, 5];
console.log(maxProfit(arr1));