/**
 *  @reference https://leetcode.com/problems/jump-game/description/
 *
 *
 *
 *  Given an array of non-negative integers, you are initially positioned at the first index of the array.
 *  Each element in the array represents your maximum jump length at that position.
 *  Determine if you are able to reach the last index.
 *
 *  Example 1:
 *  Input: [2,3,1,1,4]
 *  Output: true
 *  Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 *  Example 2:
 *  Input: [3,2,1,0,4]
 *  Output: false
 *  Explanation: You will always arrive at index 3 no matter what. Its maximum
 *           jump length is 0, which makes it impossible to reach the last index.
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let len = nums.length;
  let minTo = new Array(len);
  minTo[0] = -1;

  let farthest = 0;
  let preFarthest = 0;
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (minTo[i] === undefined) return false;

    j = preFarthest + 1;
    farthest = Math.min(nums[i] + i, len - 1);
    while(j <= farthest) {
      if (minTo[j] === undefined) {
        minTo[j] = i;
      }
      j++;
    }
    preFarthest = farthest;
  }
  return true;
}
