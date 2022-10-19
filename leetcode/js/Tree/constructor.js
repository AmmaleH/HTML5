function TreeNode(val, left, right) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var root = new TreeNode(1);
var node1 = new TreeNode(2);
var node2 = new TreeNode(3);
var node3 = new TreeNode(4);
var node4 = new TreeNode(5);
var node5 = new TreeNode(6);
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;

module.exports = {
    TreeNode,
    root
}