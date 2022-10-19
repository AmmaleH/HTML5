
function isMatched(s) {
    const stack = [],
        map = new Map({
            "(": ")",
            "[": "]",
            "{": "}"
        });
    for (let i of s) {
        if (map.has(i)) {
            stack.push(i);
            continue;
        }
        if (map.get(i) != stack.pop()) {
            return false;
        }
    }
    return stack.length == 0;
}
console.log(isMatched("{[{()}]"));