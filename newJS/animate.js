//动画函数（匀速、变速）
function animate(obj, distance, callback) {     //callback形参为回调函数
    clearInterval(obj.timer);
    //每次移动的步长  缓动动画的核心
    var step = (distance - obj.offsetLeft) / 20;
    //防止小数的出现使得最终定位不准，取整
    step = step < 0 ? Math.floor(step) : Math.ceil(step);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft >= distance) {
            //停止动画，本质上是清除计数器
            clearInterval(obj.timer);
            if (callback) {
                //调用函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';   //此处为定值则是匀速动画

    }, 30);
}