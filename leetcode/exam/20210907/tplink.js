/**
 * 反转字符串，只反转辅音字母
 * @param {string} str 
 * @returns string
 */
function reverse(str) {
    const yuanyin = ['a', 'e', 'i', 'o', 'u'];
    const yy = new Map(), fy = [];
    const strArr = Array.from(str), len = strArr.length;
    for (let i = 0; i < len; i++) {
        if (yuanyin.includes(strArr[i])) {
            yy.set(i, strArr[i]);
        } else {
            fy.push([strArr[i]]);
        }
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        if (yy.has(i)) {
            res.push(yy.get(i))
        } else {
            res.push(fy.pop());
        }
    }
    return res.join("");
}
