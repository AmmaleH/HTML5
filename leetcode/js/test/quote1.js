var b = "window";
function c() {
    console.log(b);
    console.log(this.b);
}
var obj = {
    b: "1-1",
    c: function () {
        console.log(b);
        console.log(this.b);
        return {
            b: "1-2",
            function() {
                console.log(b);
                console.log(this.b);
            }
        }
    }
}
c();
obj = obj.c();
obj.c = c;
obj.c();

// 在 node 环境中声明的变量，并不是 global 对象的属性，global.b = undefined
//  模块的全局变量是该模块私有的，其他模块包括 global 无法取到。
// 而在浏览器中，顶层作用域就是全局作用域。
