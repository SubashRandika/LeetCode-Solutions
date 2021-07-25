/**
 * See the Details.txt
 * Problem: Wildcard Balanced String
 *
 * @param {string} str
 * @return {boolean}
 */
const balanced = (str) => {
	if (str.length === 0) {
		return true;
	}

	const strArr = [...str];

	const chars = [...new Set(strArr.filter((s) => s != '*'))];
	const counts = strArr.reduce(
		(counts, s) => (s == '*' ? counts : ((counts[s] += 1), counts)),
		Object.fromEntries(chars.map((l) => [l, 0]))
	);
	const maxCount = Math.max(...Object.values(counts));
	const strLen = strArr.length;

	const factorPairs = [...Array(Math.floor(Math.sqrt(strLen)))]
		.map((_, i) => i + 1)
		.flatMap((f) =>
			strLen % f == 0
				? [
						[f, strLen / f],
						[strLen / f, f]
				  ]
				: []
		);

	return factorPairs.some(
		([count, letters]) =>
			letters <= 52 && letters >= chars.length && count >= maxCount
	);
};

export default balanced;
