// leetcode55
// 动态规划，有点笨了
var canJump = function (nums) {
    var dp = [];
    if (nums[0] !== 0) {
        dp[0] = [1, nums[0]];
    } else {
        dp[0] = [0, 0];
    }
    const len = nums.length;
    if (len == 1) return true;
    if (len == 2 && dp[0][1] > 0) return true;
    if (nums[0] == 0) return false;
    var i = 1;
    while (i < len - 1) {
        if (nums[i] != 0) {
            let temp = Math.max(i + nums[i], dp[i - 1][1]);
            dp[i] = [i + 1, i + nums[i]];
        } else {
            if (dp[i - 1][1] <= i) return false;
            dp[i] = [dp[i - 1][0], dp[i - 1][1]];
        }
        if (dp[i][1] >= len - 1) {
            return true;
        }
        i++;
    }
    return false;
};

// 贪心
var canJump1 = function (nums) {
    var len = nums.length;
    var maxRight = 0;
    for (let i = 0; i < len; i++) {
        if (maxRight >= i) {   // 能跳到当前索引处才能继续往后面跳
            maxRigth = Math.max(maxRight, i + nums[i]);
            if (maxRight >= len - 1) return true;
        }

    }
    return false;
}

var canJump = function (nums) {
    const len = nums.length;
    var maxRight = 0;
    for (let i = 0; i < len; i++) {
        if (i > maxRight) return false;   // 已经跳不到当前索引处了，直接返回 false。
        maxRigth = Math.max(maxRight, i + nums[i]);
        if (maxRight >= len - 1) return true;
    }
    return true;
}

console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

