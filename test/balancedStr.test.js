import { assert } from 'chai';
import balanced from '../src/Balanced_String/balancedStr.js';

describe('Tests for balanced(str)', () => {
	it('Should test for balanced("a")', () => {
		assert.isTrue(balanced('a'));
	});

	it('Should test for balanced("ab")', () => {
		assert.isTrue(balanced('ab'));
	});

	it('Should test for balanced("abc")', () => {
		assert.isTrue(balanced('abc'));
	});

	it('Should test for balanced("abcb")', () => {
		assert.isFalse(balanced('abcb'));
	});

	it('Should test for balanced("Aaa")', () => {
		assert.isFalse(balanced('Aaa'));
	});

	it('Should test for balanced("abcb*")', () => {
		assert.isFalse(balanced('abcb*'));
	});

	it('Should test for balanced("abcb**")', () => {
		assert.isTrue(balanced('abcb**'));
	});

	it('Should test for balanced("***********")', () => {
		assert.isTrue(balanced('***********'));
	});

	it('Should test for balanced("")', () => {
		assert.isTrue(balanced(''));
	});

	it('Should test for balanced("abb")', () => {
		assert.isFalse(balanced('abb'));
	});

	it('Should test for balanced("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*")', () => {
		assert.isFalse(
			balanced('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*')
		);
	});

	it('Should test for balanced("***IAET")', () => {
		assert.isTrue(balanced('***IAET'));
	});
});
