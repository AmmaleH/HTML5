
/**
 * 一个个面试的起始终止时间构成的二维数组，问最少需要排多少间面试的房间。
 * @param {Array} arr 
 * @returns Number
 */

function roomNum(arr) {
    var queue = [], len = arr.length;
    arr.sort((a, b) => a[0] - b[0]);   // 按起始时间排序
    queue.push(arr[0][1]);
    for (let i = 1; i < len; i++) {
        let j = 0;
        while (j < queue.length) {
            // 当前这个面试房间的最后一场面试时间与当前这个面试时间不冲突，则更新时间为当前的这个面试时间
            if (arr[i][0] >= queue[j]) {
                queue.splice(j, 1, arr[i][1]);
                break;
            }
            j++;
        }
        // 都有冲突，再新加一个面试的房间
        if (j == queue.length)
            queue.push(arr[i][1]);
    }
    return queue.length;
}

var arr = [[1, 5], [2, 6], [6, 9], [5, 7]];
console.log(roomNum(arr));
