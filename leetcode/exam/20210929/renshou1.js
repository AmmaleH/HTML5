
function matchWord(target, str) {
    target = target.toLowerCase();
    str = str.toLowerCase();
    const strArr = Array.from(str),
        tArr = Array.from(target);
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == tArr[0]) {
            for (let j = 0; j < tArr.length; j++) {
                if (tArr[j] != strArr[i + j]) break;
            }
            res.push(i);
        }
    }
    if (res.length) {
        console.log(res.length + " " + res[0]);
    } else {
        console.log(-1);
    }
}


matchWord("my", "My is my long");