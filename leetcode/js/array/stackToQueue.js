
class Queue {
    // 初始化时传参为数组格式 [1,2,3]这种
    constructor(arr) {
        this.arr = arr === undefined ? [] : arr;
    }
    add(val) {
        this.arr.push(val);
    }
    poll() {
        var len = this.arr.size();
        var temp = new Array(len);
        while (this.arr.length) {
            temp.push(this.arr.pop());
        }
        var res = temp.pop();
        while (temp.length) {
            this.arr.push(temp.pop());
        }
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
    size() {
        return this.arr.length;
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

var queue = new Queue([1, 2]);
console.log(queue.toString());
queue.add(3);
console.log(queue.toString());
queue.poll();
console.log(queue);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());


function method(arr) {
    const res = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * 20);
        res.push(arr[index]);
        arr.splice(index, 1);
    }
    res.sort((a, b) => a - b);  // 升序排序
    for (let i = 1; i < 5; i++) {
        if (res[i] - res[i - 1] == 1) {
            console.log(res[i - 1]);
        } else {
            break;
        }
    }
}