import { assert } from 'chai';
import evenPairs from '../src/EvenPairs/evenPairs.js';

describe('Tests for evenPairs(str)', () => {
	it('Should test for evenPairs("f178svg3k19k46")', () => {
		assert.isTrue(evenPairs('f178svg3k19k46'));
	});

	it('Should test for evenPairs("7r5gg812")', () => {
		assert.isTrue(evenPairs('7r5gg812'));
	});

	it('Should test for evenPairs("3gy41d216")', () => {
		assert.isTrue(evenPairs('3gy41d216'));
	});

	it('Should test for evenPairs("f09r27i8e67")', () => {
		assert.isFalse(evenPairs('f09r27i8e67'));
	});

	it('Should test for evenPairs("fdfs1386eretre")', () => {
		assert.isTrue(evenPairs('fdfs1386eretre'));
	});
});
