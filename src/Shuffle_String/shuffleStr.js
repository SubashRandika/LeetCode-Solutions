/**
 * 1528. Given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * Return the shuffled string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const shuffleStr = (s, indices) => {
	const shuffled = [];

	for (let i = 0; i < s.length; i++) {
		shuffled[indices[i]] = s.charAt(i);
	}

	return shuffled.join('');
};

export default shuffleStr;
