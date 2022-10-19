function maxWeight(str) {
    var res = 0;
    const arr = Array.from(str);
    const nums = [], oneNum = 0;
    if (arr[0] == 0) {
        nums[0][0] = 1;
        nums[0][1] = 0;
    } else {
        nums[0][0] = 0;
        nums[0][1] = 1;
    }
    arr.forEach(item => {
        oneNum += item == 1 ? 1 : 0;
    })
    for (let i = 1; i < str.length; i++) {
        if (arr[i] == 0) {
            nums[i][0] = nums[i - 1][0] + 1;
            nums[i][1] = nums[i - 1][1];
        } else {
            nums[i][0] = nums[i - 1][0];
            nums[i][1] = nums[i - 1][1] + 1;
        }
    }
    for (let i = 1; i < str.length - 1; i++) {
        let temp = nums[i - 1][0] + oneNum - nums[i - 1][1];
        if (temp > res) res = temp;
    }
    return res;
}