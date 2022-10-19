function fn(start, end) {
    let i = 0;
    var interval = setInterval(() => {
        if (start + i >= end) clearInterval(interval);
        console.log(start + i++);
    }, 100);
    return function () {
        clearInterval(interval);
    }
}

fn(3, 6);