

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function createList(arr: Array<number>): ListNode | null {
    let pre: ListNode | null = new ListNode(0), node = pre;
    arr.forEach(val => {
        node.next = new ListNode(val);
        node = node.next;
    });
    return pre.next;
}
let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 8]);

function listLen(node: ListNode | null): number {
    let len: number = 0;
    while (node) {
        len++;
        node = node.next;
    }
    return len;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let long: ListNode | null = listLen(l1) >= listLen(l2) ? l1 : l2;
    let short: ListNode | null = listLen(l1) >= listLen(l2) ? l2 : l1;
    let carry: number = 0, node: ListNode | null = long, pre: ListNode | null = null;
    while (node) {
        let temp = node.val;
        if (short) {
            node.val = (node.val + short.val + carry) % 10;
            carry = temp + short.val + carry >= 10 ? 1 : 0;
            pre = node;
            node = node.next;
            short = short.next;
        } else {
            node.val = (node.val + carry) % 10;
            carry = temp + carry >= 10 ? 1 : 0;
            pre = node;
            node = node.next;
        }
    }
    if (carry && pre) pre.next = new ListNode(1);
    return long;

}

function addTwoNumbers1(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let res: ListNode | null = new ListNode(0);
    let node: ListNode | null = res;
    let carry: number = 0;
    while (l1 || l2) {
        if (l1 && l2) {
            let temp = l1.val + l2.val + carry;
            node.next = new ListNode(temp % 10);
            carry = temp >= 10 ? 1 : 0;
            l1 = l1.next;
            l2 = l2.next;
            node = node.next;
        } else if (l1) {
            let temp = l1.val + carry;
            node.next = new ListNode(temp % 10);
            carry = temp >= 10 ? 1 : 0;
            l1 = l1.next;
            node = node.next;
        } else if (l2) {
            let temp = l2.val + carry;
            node.next = new ListNode(temp % 10);
            carry = temp >= 10 ? 1 : 0;
            l2 = l2.next;
            node = node.next;
        }
    }
    if (carry) {
        node.next = new ListNode(carry);
    }
    return res.next;
};


let res: ListNode | null = addTwoNumbers1(l1, l2);
while (res) {
    console.log(res.val + " -> ");
    res = res.next;
}