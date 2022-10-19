var change = function (amount, coins) {
    var dp = new Array(amount + 1);
    dp.fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) dp[i] += dp[j - coins[i]];
        }
    }
    return dp[amount];
};
console.log(change(5, [1, 2, 5]));