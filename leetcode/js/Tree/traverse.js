var constructor = require('./constructor.js');
console.log(constructor);
function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}
inOrder(constructor.root);