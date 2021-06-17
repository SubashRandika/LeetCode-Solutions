import { assert } from 'chai';
import mergeStringsAlt from '../src/1768_Merge_Strings_Alternative/mergeStrAlt.js';

describe('Tests for mergeStringsAlt(word1, word2)', () => {
	it('Should test for mergeStringsAlt("abc", "pqr")', () => {
		assert.equal(mergeStringsAlt('abc', 'pqr'), 'apbqcr');
	});

	it('Should test for mergeStringsAlt("ab", "pqrs")', () => {
		assert.equal(mergeStringsAlt('ab', 'pqrs'), 'apbqrs');
	});

	it('Should test for mergeStringsAlt("abcd", "pq")', () => {
		assert.equal(mergeStringsAlt('abcd', 'pq'), 'apbqcd');
	});

	it('Should test for mergeStringsAlt("xxxxxxxxxx", "yyyyyyyyyyyyyyy")', () => {
		assert.equal(
			mergeStringsAlt('xxxxxxxxxx', 'yyyyyyyyyyyyyyy'),
			'xyxyxyxyxyxyxyxyxyxyyyyyy'
		);
	});

	it('Should test for mergeStringsAlt("Hello", "World")', () => {
		assert.equal(mergeStringsAlt('Hello', 'World'), 'HWeolrllod');
	});
});
