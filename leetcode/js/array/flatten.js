var arr = [1, [2], [3, [4]]];
// 1.ES6 api Array.Prototype.flat(n)  传参 n 为展开的层数，默认为1。
console.log(arr.flat(Infinity));  // [1, 2, 3, 4]

// 2.reduce + 递归
function flatten1(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
}
console.log(flatten1(arr));   // [1, 2, 3, 4]

// 3.for 循环
var flatten2 = function (arr) {
    var len = arr.length,
        res = [];
    for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten2(arr[i]));    // concat() 返回的是一个新数组
            // res.push(...flatten2(arr[i]));      
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(flatten2(arr));   // [1, 2, 3, 4]

// 4.while 循环
var flatten3 = function (arr) {
    while (arr.some(ele => Array.isArray(ele))) {
        arr = [].concat(...arr);
        // [1].concat([2])  -> [1, 2]
    }
    return arr;
}
console.log(flatten3(arr));   // [1, 2, 3, 4]

// 5.队列
//    所有元素放入队列中，依次出队并判断当前出队元素是否为数组，
// 是的话展开一次并重新入队，否则push进res中
var flatten4 = function (arr) {
    const stack = [...arr];   // 不改变原有数组
    const res = [];
    while (stack.length) {
        let temp = stack.shift();
        if (Array.isArray(temp)) {
            stack.unshift(...temp);
        } else {
            res.push(temp);
        }
    }
    return res;
}
console.log(flatten4(arr).toString());   // [1, 2, 3, 4]

// 如果数组的项全部为数字
// toString()、join()、split()
// join() 将数组拼接成字符串，默认用 , 分隔每个元素
function flatten5(arr) {
    // return arr.toString().split(",").map(ele => +ele);
    // return arr.join().split(",").map(ele => +ele);
    return arr.join(",").split(",").map(ele => +ele);   // 只能用 ","，不能用其他字符
}
console.log(flatten5(arr));   // [1, 2, 3, 4]
