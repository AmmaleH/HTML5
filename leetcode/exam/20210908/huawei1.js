
function method(M, N, graph) {
    var dp = new Array(M), temp = new Array(N);
    temp.fill(Infinity);
    dp.fill(temp);
    dp[0][0] = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] == 0) continue;
            for (let ni = i; ni < i + graph; ni++) {
                let limit = graph[i][j] - ni + i;
                for (let nj = j; nj <= j + limit; nj++) {
                    if (ni == i && nj == j) continue;
                    if (ni < M && nj < N) {
                        dp[ni][nj] = Math.min(dp[ni][nj], dp[i][j] + 1);
                    }
                }
            }
        }
    }
    return dp[M - 1][N - 1];
}
console.log()
