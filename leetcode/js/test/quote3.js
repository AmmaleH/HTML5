var a = 1
function out() {
    var a = 2
    inner()
}
function inner() {
    console.log(a)
}
out();

// javascript 采用的是词法作用域，即静态作用域，函数的作用域在函数定义的时候就确定了；
//    对应的是动态作用域，即函数的作用域是在函数调用的时候才决定。