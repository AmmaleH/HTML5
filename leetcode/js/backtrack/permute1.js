const res = [];

/**
 * 全排列，待选数组中有重复元素
 * @param {Array} nums 
 * @returns 
 */
var permuteUnique = function (nums) {
    nums.sort();
    const path = [], check = new Array(nums.length);
    check.fill(0);
    select(nums, path, check);
    return res;
};
function select(nums, path, check) {
    if (nums.length == path.length) {
        res.push(path);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (check[i] == 1) continue;
        if (i > 0 && nums[i] == nums[i - 1] && check[i - 1] == 0) continue;
        check[i] = 1;
        path.push(nums[i]);
        select(nums, path, check);
        check[i] == 0;
        path.pop();
    }
}

var permuteUnique1 = function (nums) {
    const ans = [];
    const vis = new Array(nums.length).fill(false);
    const backtrack = (idx, perm) => {
        if (idx === nums.length) {
            ans.push(perm.slice());
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            perm.push(nums[i]);
            vis[i] = true;
            backtrack(idx + 1, perm);
            vis[i] = false;
            perm.pop();
        }
    }
    nums.sort((x, y) => x - y);
    backtrack(0, []);
    return ans.join(",");
};

var nums = "abcc";
nums = Array.from(nums);
console.log(permuteUnique1(nums));