import { assert } from 'chai';
import twoSum from '../src/Two_Sum/twoSum.js';

describe('Tests for twoSum(numbers, target)', () => {
	it('Should test for twoSum([2, 7, 11, 15], 9)', () => {
		assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
	});

	it('Should test for twoSum([3, 2, 4], 6)', () => {
		assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
	});

	it('Should test for twoSum([3, 3], 6)', () => {
		assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
	});

	it('Should test for twoSum([10, 3, 4, 13, 8, 9, 15, 20, 5, 7], 21)', () => {
		assert.deepEqual(twoSum([10, 3, 4, 13, 8, 9, 15, 20, 5, 7], 21), [3, 4]);
	});

	it('Should test for twoSum([21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43], 68)', () => {
		assert.deepEqual(
			twoSum([21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43], 68),
			[6, 7]
		);
	});
});
