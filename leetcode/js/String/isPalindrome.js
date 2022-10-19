var isPalindrome = function (x) {
    var left = 0, right = x.length - 1;
    while (left < right) {
        if (x[left] != x[right])
            return false;
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("15421"));