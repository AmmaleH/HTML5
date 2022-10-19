
function test(str) {
    var strArr = str.split("-"), len = strArr.length;
    for (let i = 1; i < len; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join("");
}
console.log(test("ab-cd-ef"));