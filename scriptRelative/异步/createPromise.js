function createPromise() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log(10);
        }, 1000);
    });
}
export function add(a, b) {
    return a + b;
}
// export { add };