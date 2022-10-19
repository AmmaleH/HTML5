class _Promise {
    static PENDING = "待定"; static FULFILLED = "成功"; static REJECTED = "失败";
    constructor(func) {
        this.status = _Promise.PENDING;
        this.result = null;
        this.resolveCallback = [];
        this.rejectCallback = [];
        try {
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(result) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.FULFILLED;
                this.result = result;
                this.resolveCallback.forEach(callback => {
                    callback(result);
                })
            }
        });
    }
    reject(result) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.REJECTED;
                this.result = result;
                this.rejectCallback.forEach(callback => {
                    callback(result);
                })
            }
        })
    }
    then(onFULFILLED, onREJECTED) {
        return new _Promise((resolve, reject) => {
            onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => { };
            onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => { };
            if (this.status === _Promise.PENDING) {
                this.resolveCallback.push(onFULFILLED);
                this.rejectCallback.push(onREJECTED);
            } else if (this.status === _Promise.FULFILLED) {
                setTimeout(() => {
                    onFULFILLED(this.result);
                });
            } else {
                setTimeout(() => {
                    onREJECTED(this.result);
                });
            }
        });

    }
}

console.log(1);
const p = new _Promise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log("这次一定之前： " + p.status);
        resolve("这次一定");
        console.log("这次一定： " + p.status);
        console.log(4);
    });
});
p.then(
    (res) => {
        console.log("then： " + p.status);
        console.log(3);
        console.log(res);
    },
    (res) => { console.log(res.message); }
);
// const p1 = new Promise((resolve, reject) => {
//     console.log(2);
//     setTimeout(() => {
//         resolve("这次一定");
//         console.log(4);
//     });
// });
// p1.then(
//     res => {
//         console.log(3);
//         console.log(res);
//     }
// )
// console.log(4);