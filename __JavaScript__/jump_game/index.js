

// https://leetcode.com/problems/jump-game/


// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.













/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var n = nums.length;

    // Save current and last index
    var lastIndex = 0;
    var currentIndex = 0;

    // Get current value
    var currentValue = nums[currentIndex];

    // While we're still jumping and inside the array
    while (currentIndex < n && currentValue > 0) {

      // Set last index to current
      lastIndex = currentIndex;

      // Jump
      currentIndex += currentValue;

      // Set current value for next iteration
      currentValue = nums[currentIndex];
    }

    // If we're on index n-1
    // at this point it was
    // possible to get to the last
    // index via jumps
    return lastIndex === n - 1;
};







if (require.main === module) {
  var a = [2, 3, 1, 1, 4];
  console.log(a, canJump(a));

  var b = [3, 2, 1, 0, 4];
  console.log(b, canJump(b));
}








