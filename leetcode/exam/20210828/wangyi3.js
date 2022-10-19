/**
 * 有 tasks 节课，有一个上第 n 节课前必须上第 m 节课的依赖关系构成的二维数组。
 * 问是否能够顺利的排课
 * @param {Number} tasks 
 * @param {Array} prerequisites 
 * @returns boolean
 */

function resole(tasks, prerequisites) {
    var status = new Array(tasks);
    status.fill(false);
    prerequisites.forEach(ele => {
        // 有依赖的在状态数组对应索引置 true
        status[ele[1]] = true;
    });
    const len = prerequisites.length;
    for (let i = 0; i < len; i++) {
        let pre = prerequisites[i][0], cur = prerequisites[i][1];
        // 当前课程有依赖，但该依赖没有满足，直接返回false
        if (status[pre]) return false;
        else status[cur] = false;
    }
    return true;
}

var arr = [[0, 1], [1, 2], [2, 0]];
var arr1 = [[0, 1], [1, 2]];
console.log(resole(3, arr));
console.log(resole(3, arr1));