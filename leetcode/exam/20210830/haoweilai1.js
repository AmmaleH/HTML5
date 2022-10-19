/**
 * 字符串实现千分位分隔符
 * @param {String} str 
 * @returns String
 */
function test(str) {
    // write code here
    var arr = Array.from(str), len = str.length, size = 0, res = [];
    while (len >= 0) {
        if (size == 3) {
            res.unshift(",");
            size = 0;
        }
        res.unshift(arr.pop());
        size++;
        len--;
    }
    if (res[0] == ",") res = res.slice(1, res.length);
    return res.join("");
}

function test1(str) {
    var len = str.length, res = "";
    var yu = len % 3;
    while (len > yu) {
        len -= 3;
        res = "," + str.substr(len, 3) + res;
    }
    res = str.substring(0, yu) + res;
    if (res[0] === ",") res = res.slice(1);
    return res;
}
console.log(test1("123456"));
console.log(test1("12345"));
console.log(test1("1234"));