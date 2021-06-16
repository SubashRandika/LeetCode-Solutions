/**
 * 1. Given an array of integers numbers and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
	let numToIndex = new Map();

	for (let i = 0; i < numbers.length; i++) {
		if (numToIndex.has(target - numbers[i])) {
			return [numToIndex.get(target - numbers[i]), i];
		}

		numToIndex.set(numbers[i], i);
	}
};

export default twoSum;
