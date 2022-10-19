var fn = function () {
    this.f = "fn";
}
Object.prototype.a = function () {
    console.log("aaa");
}
Function.prototype.b = function () {
    console.log("bbb");
}
var f1 = new fn();
console.log(f1.__proto__.__proto__.constructor);
console.log(fn.a());
console.log(fn.b());