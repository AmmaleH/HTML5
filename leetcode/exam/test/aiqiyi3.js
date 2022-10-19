function A(a) {
    this.a = a;
}
var aa = new A(10);
console.log(aa.__proto__ == A.prototype);
console.log(aa.__proto__.__proto__);
console.log(aa.__proto__.__proto__.constructor);
console.log(aa.__proto__.__proto__.constructor());
console.log(aa.__proto__.__proto__ == Object.prototype);
console.log(aa.constructor);
console.log(aa.constructor());
console.log(aa.__proto__.constructor());
