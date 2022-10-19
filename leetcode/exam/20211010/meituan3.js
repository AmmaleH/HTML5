/**
 * 
 * @param {*} n 朋友数量
 * @param {*} m m种礼物
 * @param {Array} num 
 * @param {Array} price 
 * @param {Array} minPrice 
 */
function method(num, price, minPrice) {
    price = price.sort((a, b) => a - b);
    const sumPrice = [];
    for (let i = 0; i < num.length; i++) {
        let j = 0;
        while (price[j] < minPrice[i]) {
            j++;
        }
        if (num[i] <= price.length - j) {
            let tempArr = price.slice(j, j + num[i]);
            let sum = tempArr.reduce((pre, cur) => pre + cur);
            sumPrice.push(sum);
        } else {
            sumPrice.push(-1);
        }
    }
    return sumPrice;
}
console.log(method([2, 3, 3], [100, 200, 300, 400, 500], [200, 300, 400]).join(" "));