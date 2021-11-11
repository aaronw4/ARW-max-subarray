var maxSubArray = function(nums) {
    let max = -Infinity
    let first = 0

    while (first != nums.length) {
        let total = 0

        for (var i = first; i < nums.length; i++) {
            total += nums[i]
            if (total > max) {
                max = total
            } else if (nums[i] > total) {                
                break
            }
        }

        first++
    }

    return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))