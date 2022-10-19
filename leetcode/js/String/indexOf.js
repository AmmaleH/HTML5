var strStr = function (haystack, needle) {
    if (!needle) return 0;
    if (haystack.length < needle.length) return -1;
    const symbol = needle[0];
    var res = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == symbol) {
            res = i;
            let len = needle.length, j = 0, k = i;
            while (j < len) {
                if (haystack[k++] != needle[j++]) {
                    res = -1;
                    break;
                }
            }
            if (res != -1) return res;
        }
    }
    return res;
};

console.log(strStr("mississippi", "issip"));