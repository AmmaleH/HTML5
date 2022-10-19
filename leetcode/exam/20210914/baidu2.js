function method(str) {
    const arr = Array.from(str), len = arr.length;
    var maxLen = 0, s1 = 0, t1 = 0, s2 = 0, t2 = 0;
    const dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = [];
    }
    // dp[i][j] 表示 i-j 中有多少个 0
    dp[0][0] = arr[0] == "0" ? 1 : 0;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            if (i == j) dp[i][j] = arr[i] == "0" ? 1 : 0;
            else {
                let temp = arr[j] == "0" ? 1 : 0;
                dp[i][j] = dp[i][j - 1] + temp;
            }
        }
    }
    var n = len - 1, sign = 0;

    while (n > 0) {
        let temp = new Array(len - n + 1);
        for (let i = 0; i <= len - n; i++) {
            temp.push([dp[i][i + n - 1], i]);
        }
        temp.sort((a, b) => a[0] - b[0]);
        for (let j = 1; j < len - n + 1; j++) {
            if (temp[j - 1][0] == temp[j][0]) {
                s1 = temp[j - 1][1] + 1;
                t1 = s1 + n - 1;
                s2 = temp[j][1] + 1;
                t2 = s2 + n - 1;
                console.log(s1 + " " + t1 + " " + s2 + " " + t2);
                return;
            }
        }
        n--;
    }

}
// var line = readline();
method("101");