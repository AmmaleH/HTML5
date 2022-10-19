var isNumber = function (s) {
    s = s.trim();
    var len = s.length;
    let i = 0;
    var splitSign = /[eE]/;
    if (s.includes("e") || s.includes("E")) {
        var arr = s.split(splitSign);
        let left = arr[0].match(/[+-]?(?=[0-9]*)(\d+\.\d+)|(\d+\.|\.\d+)|(\d+)/);
        if (!left) return false;
        let right = arr[1].match(/[+-]?\d+/);
        if (!right) return false;
        return left[0] == arr[0] && right[0] == arr[1];
    } else {
        let temp = s.match(/[+-]?(?=[0-9]*)(\d+\.\d+)|(\d+\.|\.\d+)|(\d+)/);
        if (!temp) return false;
        return temp[0] == s;
    }
};

console.log("-1E-16" + " : " + isNumber("-1E-16"));
// console.log(".1" + " : " + isNumber(".1"));
// console.log("+" + " : " + isNumber("+"));
// console.log("." + " : " + isNumber("."));
// console.log("e" + " : " + isNumber("e"));
// console.log("3." + " : " + isNumber("3."));
// console.log("0214" + " : " + isNumber("0214"));
// console.log("+23.543e-52" + " : " + isNumber("+23.543e-52"));