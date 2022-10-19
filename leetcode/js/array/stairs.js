/**
 * 爬 n 阶楼梯可以的方式
 * @param {*} floor 
 * @returns 
 */
function stairs(floor) {
    var arr = [];
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 4;
    for (let i = 4; i <= floor; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
    return arr[floor];
}
console.log(stairs(11));