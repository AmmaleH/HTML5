// var start = Date.now();
// setTimeout(function () {
//     //var end = Date.now();
//     console.log(Date.now() - start);
// }, 1000);

function AAA(a) {
    this.a = a;
}
var a = new AAA(9090);
// 怎么让 a 的 constructor 指向 Object


while (true) {
    if (a.constructor == Object) {
        console.log(9090); break;
    } else {
        a = a.__proto__;
    }
}

a.__proto__.__proto__.constructor();