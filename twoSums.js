// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    // Create an empty object to store the mapping of numbers to their indices
    const numIndexMap = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement exists in the numIndexMap
        if (complement in numIndexMap) {
            // If found, return the indices of the current number and its complement
            return [numIndexMap[complement], i];
        }

        // Store the current number and its index in the numIndexMap
        numIndexMap[currentNum] = i;
    }

    // If no solution is found, return an empty array or handle it as per your requirements
    return [];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
