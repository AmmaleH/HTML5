function findDisappearedNumbers(nums: number[]): number[] {
    // let res: Array<number> = [], n = nums.length, temp = 0, insertData = 0;
    // while (n--) {
    //     insertData = nums[temp];
    //     temp = nums[insertData - 1];
    //     nums[insertData - 1] = insertData;
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== i + 1) {
    //         let temp = nums[i];
    //         nums[i] = nums[temp - 1];
    //         nums[temp - 1] = temp;
    //     }
    // }
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let temp = (nums[i] - 1) % len;
        nums[temp] += len;
    }
    let res: Array<number> = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] <= len) res.push(i + 1);
    }
    return res;
}
console.log(findDisappearedNumbers([3, 3, 2]));
