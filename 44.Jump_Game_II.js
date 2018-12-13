/**
 *  @reference https://leetcode.com/problems/jump-game-ii/description/
 *
 *  @note  Jump Game: https://leetcode.com/problems/jump-game/description/
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 *
 */




/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
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

  let pos = len - 1;
  let shortestPath = [];
  while (minTo[pos] != -1) {
      shortestPath.unshift(pos);
      pos = minTo[pos];
  }
  return shortestPath.length;
};
