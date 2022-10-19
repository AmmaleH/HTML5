function getValue(ch) {
    switch (ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

function romainToInt1(str) {
    var sum = 0, len = str.length;
    for (let i = 0; i < len; i++) {
        let val = getValue(str[i]);
        if (i + 1 < len && val < getValue(str[i + 1])) {
            sum -= val;
        } else {
            sum += val;
        }
    }
    return sum;
}
function romainToInt2(str) {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    var sum = 0, len = str.length;
    for (let i = 0; i < len; ++i) {
        let val = map.get(str[i]);
        if (i + 1 < len && val < map.get(str[i + 1])) {
            sum -= val;
        } else {
            sum += val;
        }
    }
    return sum;
}
var romainToInt = function (str) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var sum = 0, len = str.length;
    for (let i = 0; i < len; i++) {
        let val = map[str[i]], next = map[str[i + 1]];
        if (val < next) {
            sum += next - val;
            i += 1;
        } else {
            sum += val;
        }
    }
    return sum;
}
// vat str = read_line();
var str = ("MCMLXXXVI")
console.log(romainToInt(str));