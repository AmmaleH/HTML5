/**
 * 全排列，待选数组中无重复元素
 * @param {*} nums 
 * @returns 
 */


var permute = function (nums) {
    const res = [], temp = [];
    dfs(nums, res, temp);
    return res.join(",");
};

function dfs(nums, res, temp) {
    if (temp.length == nums.length) {
        res.push(temp.concat());    // 这里要深复制该条路径
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue;
        }
        temp.push(nums[i]);
        dfs(nums, res, temp);
        temp.pop();
    }
}
// var nums = readline();
var nums = "abc";
nums = Array.from(nums);
console.log(permute(nums));