import { assert } from 'chai';
import shuffleStr from '../src/1528_Shuffle_String/shuffleStr.js';

describe('Tests for shuffleStr(s, indices)', () => {
	it('Should test for shuffleStr("codeleet", [4,5,6,7,0,2,1,3])', () => {
		assert.equal(shuffleStr('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]), 'leetcode');
	});

	it('Should test for shuffleStr("abc", [0,1,2])', () => {
		assert.equal(shuffleStr('abc', [0, 1, 2]), 'abc');
	});

	it('Should test for shuffleStr("aiohn", [3,1,4,2,0])', () => {
		assert.equal(shuffleStr('aiohn', [3, 1, 4, 2, 0]), 'nihao');
	});

	it('Should test for shuffleStr("aaiougrt", [4,0,2,6,7,3,1,5])', () => {
		assert.equal(shuffleStr('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]), 'arigatou');
	});

	it('Should test for shuffleStr("art", [1,0,2])', () => {
		assert.equal(shuffleStr('art', [1, 0, 2]), 'rat');
	});
});
