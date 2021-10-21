const Result = { win: 1, loss: 2, tie: 3 };

const mapping = {
	T: 10,
	J: 11,
	Q: 12,
	K: 13,
	A: 14
};

const getNumbersArray = function (hand) {
	let numbs = hand.split(' ').map((val) => {
		let num = val.split('')[0];

		if (mapping[num]) {
			return mapping[num];
		}

		return +num;
	});

	numbs = numbs.sort((a, b) => a - b);
	return numbs;
};

const isStraight = function (hand) {
	const numbers = getNumbersArray(hand);
	let result = numbers
		.map((val, index, array) => array[index + 1] - val)
		.slice(0, 4)
		.every((val) => val === 1);

	return {
		result: result,
		max: Math.max(...numbers)
	};
};

const isFlush = function (hand) {
	const numbers = getNumbersArray(hand);
	const result = hand
		.split(' ')
		.map((val) => val.split('')[1])
		.every((val, i, array) => val === array[0]);

	return {
		result: result,
		max: Math.max(...numbers)
	};
};

const isStraightFlush = function (hand) {
	const numbers = getNumbersArray(hand);

	return {
		result: isStraight(hand).result && isFlush(hand).result,
		max: Math.max(...numbers)
	};
};

const isRoyalFlush = function (hand) {
	const isStrFlush = isStraightFlush(hand);

	return {
		result: isStrFlush.result && isStrFlush.max === 14,
		max: 14
	};
};

const times = function (hand, t) {
	const numbers = getNumbersArray(hand);
	const occurrences = {};

	numbers.forEach((num) => {
		if (occurrences[num] === undefined) {
			occurrences[num] = 1;
		} else {
			occurrences[num] = occurrences[num] + 1;
		}
	});

	let result = false;
	let max;

	Object.keys(occurrences).forEach((key) => {
		if (occurrences[key] === t) {
			result = true;
			max = +key;
		}
	});

	return {
		result: result,
		max: max
	};
};

const isFourOfKind = function (hand) {
	return times(hand, 4);
};

const isThreeOfKind = function (hand) {
	return times(hand, 3);
};

const isFullHouse = function (hand) {
	const numbers = getNumbersArray(hand);
	const occurrences = {};

	numbers.forEach((num) => {
		if (occurrences[num] === undefined) {
			occurrences[num] = 1;
		} else {
			occurrences[num] = occurrences[num] + 1;
		}
	});

	const keys = Object.keys(occurrences);
	let values = keys.map((key) => occurrences[key]);

	if (values[0] === 2 && values[1] === 3) {
		return { result: true, max: +keys[1] };
	}

	if (values[0] === 3 && values[1] === 2) {
		return { result: true, max: +keys[0] };
	}

	return {
		result: false,
		max: -Infinity
	};
};

const isTwoPair = function (hand) {
	const numbers = getNumbersArray(hand);
	const occurrences = {};

	numbers.forEach((num) => {
		if (occurrences[num] === undefined) {
			occurrences[num] = 1;
		} else {
			occurrences[num] = occurrences[num] + 1;
		}
	});

	let twopairs = [];

	Object.keys(occurrences).forEach((key) => {
		if (occurrences[key] === 2) twopairs.push(key);
	});

	return {
		result: twopairs.length === 2,
		max: Math.max(...twopairs)
	};
};

const isSinglePair = function (hand) {
	const numbers = getNumbersArray(hand);
	const occurrences = {};

	numbers.forEach((num) => {
		if (occurrences[num] === undefined) {
			occurrences[num] = 1;
		} else {
			occurrences[num] = occurrences[num] + 1;
		}
	});

	let pair = undefined;
	let max = -Infinity;

	Object.keys(occurrences).forEach((key) => {
		if (occurrences[key] === 2) {
			pair = key;
		} else {
			max = Math.max(key, max);
		}
	});

	return {
		result: Boolean(pair),
		max: max
	};
};

const getWeight = function (hand) {
	if (isRoyalFlush(hand).result) {
		return Infinity;
	} else if (isStraightFlush(hand).result) {
		return 1000 + isStraightFlush(hand).max;
	} else if (isFourOfKind(hand).result) {
		return 900 + isFourOfKind(hand).max;
	} else if (isFullHouse(hand).result) {
		return 800 + isFullHouse(hand).max;
	} else if (isFlush(hand).result) {
		return 700 + isFlush(hand).max;
	} else if (isStraight(hand).result) {
		return 600 + isStraight(hand).max;
	} else if (isThreeOfKind(hand).result) {
		return 500 + isThreeOfKind(hand).max;
	} else if (isTwoPair(hand).result) {
		return 400 + isTwoPair(hand).max;
	} else if (isSinglePair(hand).result) {
		return 300;
	} else {
		return Math.max(...getNumbersArray(hand));
	}
};

function PokerHand(hand) {
	this.cards = hand;
}

PokerHand.prototype.compareWith = function (hand) {
	const ourWeight = getWeight(this.cards);
	const opponentWeight = getWeight(hand.cards);

	if (ourWeight > opponentWeight) {
		return Result.win;
	} else if (ourWeight < opponentWeight) {
		return Result.loss;
	} else {
		const ourNumbers = getNumbersArray(this.cards);
		const opponentNumbers = getNumbersArray(hand.cards);
		let j = 5;

		while (j) {
			if (ourNumbers[j - 1] > opponentNumbers[j - 1]) {
				return Result.win;
			} else if (opponentNumbers[j - 1] > ourNumbers[j - 1]) {
				return Result.loss;
			}

			j--;
		}

		return Result.tie;
	}
};
