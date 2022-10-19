/**
 * 高铁线路5个站点，乘坐一站的价格是100元，连续乘坐有优惠：2个站9折，3个站8折，4个站7折。
 * 现在有一些客户要购买某一趟列车的车票（车票只有一张，可以拆成分段售卖）
 * 客户从不同站点上车，有不同的乘坐距离，现在要计算将车票出售给其中的哪些乘客，可以获得最高的收益。
 * 样例输入：
 * a,1,5
 * b,3,5
 * c,1,3
 * 输出：
 * b c
 * 车票卖给a，价格是400 x 70% = 280元，卖给b和c，获得（100 x 2 x 0.9）x2 = 360元
 * @param {Array} passenger
 *  
 */

// 原则就是让把票卖给尽可能多的人。
// 所以根据输入（乘客名称、起始站、终点站），存入一个 n 行 3 列的数组 passenger(乘客) 中，然后进行排序，
// 根据起始站、终点站的顺序进行排序。之后维护一个数组，遍历 passenger 这个数组，里面嵌套一个 while 循环
// 在这个循环里面维护一个数组 queue（存放的是可以连接起来的各个乘客的乘车区间），放置乘车区间不冲突的区间，
// 如果当前乘客的乘车起始站 >= queue 中当前数值，则插入到当前元素的后面，如果都不符合，就在 queue 数组后面添加当前乘客
// 的乘车区间的终点站。最后遍历 queue 数组，返回长度最长的那一项就行。
function method(passenger) {
    passenger.sort((a, b) => a[1] - b[1]);
    var queue = [];
    const len = passenger.length;
    queue.push([[passenger[0][0]], passenger[0][2]]);
    for (let i = 1; i < len; i++) {
        let j = 0;
        while (j < queue.length) {
            if (passenger[i][1] >= queue[j][1]) {
                queue[j] = [queue[j][0].concat(passenger[i][0]), passenger[i][2]];
                break;
            }
            j++;
        }
        if (j == queue.length) {
            queue.push([[passenger[i][0]], passenger[i][2]]);
        }
    }
    let max = 0, maxIndex = 0;
    for (let i = 0; i < queue.length; i++) {
        let len = queue[i][0].length;
        if (len > max) {
            max = len;
            maxIndex = i;
        }
    }
    const res = queue[maxIndex][0];
    res.sort();
    console.log(res.join(" "));
}

function main() {
    var data = input.split("\n");
    data = data.map(item => {
        return item.split(",").map(k => {
            if (!isNaN(Number(k))) {
                return parseInt(k);
            } else {
                return k;
            }
        })
    })
    function foFunc(passenger) {

    }
    doFunc(data);
    process.exit();
}




method(arr);
var line;
var arr = [];
while (line = readline()) {
    line = line.split(",");
    line = line.map(item => {
        if (!isNaN(Number(item))) {
            return parseInt(item);
        } else {
            return item;
        }
    })
    arr.push(line);
}
method([['a', 1, 5], ['b', 3, 5], ['c', 1, 3]]);

