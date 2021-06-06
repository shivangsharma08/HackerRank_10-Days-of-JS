

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    return nums.map(el => 
       el%2===0 ? el*=2 : el*=3
    )
    
}

