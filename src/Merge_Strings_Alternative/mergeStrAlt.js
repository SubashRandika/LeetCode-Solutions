/**
 * 1768. Given two strings word1 and word2.
 * Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeStringsAlt = (word1, word2) => {
	let mergedString = '';

	for (let i = 0; i < word1.length || i < word2.length; i++) {
		if (i < word1.length) {
			mergedString += word1.charAt(i);
		}

		if (i < word2.length) {
			mergedString += word2.charAt(i);
		}
	}

	return mergedString;
};

export default mergeStringsAlt;
