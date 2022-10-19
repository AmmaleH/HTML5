
function merge(list1, list2) {
    var head = new ListNode(0), cur = head;
    while (list1 || list2) {
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                cur.next = list1;
                cur = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                cur = list2;
                list2 = list2.next;
            }
        }
        if (list1) {
            cur.next = list1;
        } else if (list2) {
            cur.next = list2;
        }
    }
    return head.next;
}

var list1 = listLink([1, 3, 5, 7, 9]);
var list2 = listLink([2, 4, 6]);
// console.log(merge(list1, list2));

function ListNode(val, next) {
    this.val = val === undefined ? undefined : val;
    this.next = next === undefined ? undefined : next;
}

function listLink(arr) {
    var head = new ListNode(0), cur = head, len = arr.length;
    for (let i = 0; i < len; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head.next;
}