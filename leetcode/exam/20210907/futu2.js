
function cost(orderNum) {
    if (orderNum == 0) return 0;
    const order = [[0, 0], [5, 30], [20, 15], [50, 10],
    [100, 9], [500, 8], [1000, 7], [2000, 6], [3000, 5],
    [4000, 4], [5000, 3], [6000, 2], [Infinity, 1]];
    const len = order.length;
    const dp = new Array(len);
    dp[0] = 0;
    for (let i = 1; i < len; i++) {
        dp[i] = dp[i - 1] + (order[i][0] - order[i - 1][0]) * order[i][1];
    }
    var allCost = 0;
    for (let i = 1; i < len; i++) {
        if (orderNum <= order[i][0]) {
            allCost = dp[i - 1] + (orderNum - order[i - 1][0]) * order[i][1];
            break;
        }
    }
    return allCost;
}
console.log(cost(6));