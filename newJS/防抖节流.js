
// 防抖
const debounce = function (fn, delay) {
    var timeout = null;
    // console.log(1);
    return function () {
        var _this = this;
        var args = arguments;
        // console.log(2);
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            fn.apply(_this, args);
            // console.log(3);
            // console.log(args);
        }, delay);
    }
}

// 节流
const throttle = function (fn, delay) {
    var timeout;
    return function () {
        var _this = this;
        var args = arguments;
        if (timeout) return;
        timeout = setTimeout(function () {
            fn.apply(_this, args);
            timeout = null;
        }, delay);
    }
}