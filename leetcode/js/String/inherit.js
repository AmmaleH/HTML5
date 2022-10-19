// 数组实现栈

class Stack {
    // var arr;
    constructor(ele) {
        this.arr = ele;
    }
    push(ele) {
        this.arr.push(ele);
    }
    pop() {
        this.arr.pop();
    }
    getSize() {
        return this.arr.length;
    }
    peek() {
        return this.arr[-1];
    }
    isEmpty() {
        return this.arr.length == 0;
    }
}

function Stack1(arr) {
    if (Array.isArray(arr))
        this.arr = arr;
    else throw "must a array!"
}
Stack1.prototype.push = function (ele) {
    this.arr.push(ele);
}
Stack1.prototype.pop = function () {
    this.arr.pop();
}
Stack1.prototype.peek = function () {
    return this.arr[this.arr.length - 1];
}
Stack1.prototype.getSize = function () {
    return this.arr.length;
}
Stack1.prototype.isEmpty = function () {
    return this.arr.length == 0;
}

var stack = new Stack1([1, 2, 3, 4]);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.getSize());
console.log(stack.peek());
console.log(stack.isEmpty());