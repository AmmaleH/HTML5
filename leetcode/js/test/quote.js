// var a = { x: 1 };
// var b = a;
// a.x = a = { n: 1 };
// console.log(a);
// console.log(b);

function closure() {
    var a = 1;
    return function () {
        console.log(a++);
    }
}
var a1 = closure()();

// var a = closure();
// a();
// a();

var x = 10;
function a(y) {
    var x = 20;
    return b(y);
}
function b(y) {
    for (let i = 0; i < 1; i++) { }
    return x + y;
}
console.log(a(20));