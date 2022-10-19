function bpgTree(s) {
    // var zeroLen = 0, oneLen = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == "0") zeroLen++;
    //     else oneLen++;
    //     if (zeroLen && oneLen) break;
    // }
    // if (zeroLen && oneLen) this.val = "G";
    // else if (oneLen) this.val = "P";
    // else this.val = "B";
    this.val = s;
    this.left = null;
    this.right = null;
}
function createBPG(s) {
    const cycle = Math.log2(s.length);
    const arr = Array.from(s), res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "0") arr[i] = new bpgTree("B");
        else arr[i] = new bpgTree("P");
    }
    var temp = arr.slice(0);
    while (temp.length > 1) {
        let floor = [];
        for (let i = 0; i + 1 < temp.length; i += 2) {
            if (temp[i].val == "B" && temp[i + 1].val == "B") {
                let parent = new bpgTree("B");
                parent.left = temp[i];
                parent.right = temp[i + 1];
                floor.push(parent);
            } else if (temp[i].val == "P" && temp[i + 1].val == "P") {
                let parent = new bpgTree("P");
                parent.left = temp[i];
                parent.right = temp[i + 1];
                floor.push(parent);
            } else {
                let parent = new bpgTree("G");
                parent.left = temp[i];
                parent.right = temp[i + 1];
                floor.push(parent);
            }
        }
        temp = floor;
    }
    return temp[0];
}
function bpg(s) {
    var root = createBPG(s);
    if (!root) return "";
    const stack = [], res = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            res.unshift(root.val);
            root = root.right;
        }
        root = stack.pop();
        root = root.left;
    }
    return res.join("");
}

console.log(bpg("10001101"));
