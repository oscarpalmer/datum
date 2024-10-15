import {expect, test} from 'vitest';
import {getDay, getDaysInMonth} from '../src/value/absolute';

const days = [
	...Array.from({length: 12}, (_, index) => new Date(2020, index, 10)),
	...Array.from({length: 12}, (_, index) => new Date(2021, index, 10)),
];

test('getDay', () => {
	const expected = [
		5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5,
	];

	const {length} = days;

	for (let index = 0; index < length; index += 1) {
		expect(getDay(days[index])).toBe(expected[index]);
	}

	expect(getDay(Number.NEGATIVE_INFINITY)).toBeNaN();
	expect(getDay(Number.POSITIVE_INFINITY)).toBeNaN();
});

test('getDaysInMonth', () => {
	const expected = [
		31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31,
		31, 30, 31, 30, 31,
	];

	const {length} = days;

	for (let index = 0; index < length; index += 1) {
		expect(getDaysInMonth(days[index])).toBe(expected[index]);
	}

	expect(getDaysInMonth(Number.NEGATIVE_INFINITY)).toBeNaN();
	expect(getDaysInMonth(Number.POSITIVE_INFINITY)).toBeNaN();
});
