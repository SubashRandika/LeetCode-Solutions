/**
 * This will determine if a pair of even numbers exists somewhere in a string.
 * Have the function evenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists
 * anywhere in the string. If a pair exists, return the string true, otherwise return false.
 * For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46"
 * so your program should return the string true.
 * Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * @param {string} str
 * @return {boolean}
 */
const evenPairs = (str) => {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (isNaN(str[i] % 2)) {
			count = 0;
		} else if (str[i] % 2 === 0) {
			count++;
		}

		if (count === 2) {
			return true;
		}
	}

	return false;
};

// Other Solution using RegEx
// const evenPairs = (str) => {
// 	return /\d\d/.test(str.replace(/[13579]/g, ''));
// };

export default evenPairs;
