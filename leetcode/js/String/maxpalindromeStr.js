// 动态规划

var longestPalindrome = function (s) {
    // 动态规划
    var len = s.length;
    const str = Array.from(s);
    if (len < 2) return str[0];
    // 构建记忆化搜索数组 arr
    var arr = Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = Array(len).fill(false);
    }
    var res = str[0], maxLen = 1, start = 0;
    // 计算 arr 的初始值（正对角线为true，相邻两字符相等的设为true）
    arr[0][0] = true;
    for (let i = 1; i < len; i++) {
        arr[i][i] = true;
        if (str[i] === str[i - 1]) {
            arr[i - 1][i] = true;
            if (maxLen < 2) {
                maxLen = 2;
                // res = s.slice(i - 1, i + 1);
                start = i - 1;
            }
        }
    }

    for (let cycle = 2; cycle < len; cycle++) {
        for (let i = 0; i < len; i++) {
            let j = cycle + i;
            if (j < len && arr[i + 1][j - 1] && str[i] === str[j]) {
                arr[i][j] = true;
                if (j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    // res = s.slice(i, j + 1);
                    start = i;
                }
            }
        }
    }
    // return res;
    return s.substr(start, maxLen);
};

// 中心扩散法
var centerExpand = function (s) {
    var len = s.length;
    if (len < 2) return s.charAt(0);
    var strArr = Array.from(s);
    var res = strArr[0], maxLen = 1, start = 0;
    for (let i = 0; i < len - 1; i++) {
        // 分别获取长度为奇数和偶数的最大回文子串长度
        let oddLen = expandMaxLength(strArr, i, i);
        let evenLen = expandMaxLength(strArr, i, i + 1);
        let len1 = oddLen > evenLen ? oddLen : evenLen;
        if (len1 > maxLen) {
            maxLen = len1;
            start = i - Math.floor((maxLen - 1) / 2);
        }
    }
    return s.substr(start, maxLen);
}

// 返回中心扩散的最大回文子串的长度
var expandMaxLength = function (strArr, left, right) {
    var len = strArr.length;
    var l = left, r = right;
    while (l >= 0 && r < len) {
        if (strArr[l] === strArr[r]) {
            l--;
            r++;
        } else {
            break;
        }

    }
    // 此时正好处于第一次 strArr[l] !== strArr[r] 的情况
    return r - l - 1;
}


// 判断一个子串是否为回文串
var validPalindrome = function (s, l, r) {
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
// console.log(validPalindrome("asdfdsa", 0, 6));
// console.log(longestPalindrome("babag"));
// console.log(centerExpand("bb"));
