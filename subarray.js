var maxSubArray = function(nums) {
    let max = nums[0]
    let first = 0

    while (first != nums.length) {
        for (var i = first + 1; i < nums.length + 1; i++) {
            let piece = nums.slice(first, i)
            let total = piece.reduce((x,y) => x + y)
            if (total > max) {
                max = total
            }
        }

        first++
    }

    return max
};

console.log(maxSubArray([1]))