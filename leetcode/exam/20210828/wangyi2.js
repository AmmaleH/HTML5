// 快乐数
/**
 *     把一个整数的每一位拆分出来，求其平方和，如此执行下去，如果得到结果为1，则为快乐数。
 * 如果一个轮次中求得的平方和在之前出现过，则直接判定不是快乐数。
 * @param {Number} n 
 * @returns boolean
 */

function isHappy(n) {
    var num = n, sum;
    var set = new Set();
    while (num != 1) {
        sum = 0;
        set.add(num);
        while (num >= 10) {
            sum += (num % 10) * (num % 10);
            num = Math.floor(num / 10);
        }
        sum += num * num;
        num = sum;
        if (set.has(num)) return false;
    }
    return true;
}

console.log(isHappy(19));
