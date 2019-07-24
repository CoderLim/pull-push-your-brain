/**
 *  @param {number[]} nums
 *  @return {number}
 */
var removeDuplicates = function(nums) {
	let tail = 1;
	const len = nums.length;
	let i = 1;

	while (i < len) {
		if (nums[i] !== nums[i-1]) {
			nums[tail] = nums[i];
			tail++;
		}
		i++;
	}
	return tail;
};
