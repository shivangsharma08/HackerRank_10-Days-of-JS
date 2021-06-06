

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => b - a);
    const max = nums[0];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < max) {
            return nums[i];
        }
    }
}

