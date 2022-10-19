function solve(room) {
    if (!room) return 0;
    var queue = [];
    room.sort((a, b) => a[0] - b[0]);
    queue.push(room[0][1]);
    for (let i = 1; i < room.length; i++) {
        let j = 0;
        while (j < queue.length) {
            if (room[i][0] >= queue[j]) {
                queue[j] = room[i][1];
                break;
            }
            j++;
        }
        if (j == queue.length) {
            queue.push(room[i][1]);
        }
    }
    return queue.length;
}
console.log(solve([[0, 30], [5, 10], [10, 20]]));