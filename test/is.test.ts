import {expect, test} from 'bun:test';
import {maximumTime, minimumTime} from '../src/constants';
import {isDate, isDateOrTimestamp, isTimestamp} from '../src/is';

const values = [
	0,
	123456789,
	minimumTime,
	maximumTime,
	minimumTime - 1,
	maximumTime + 1,
	new Date(),
	'',
	true,
	false,
	[],
	{},
	() => {},
	undefined,
	null,
	new Map(),
	new Set(),
];

const {length} = values;

test('isDate', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isDate(values[index])).toBe(index === 6);
	}
});

test('isDateOrTimestamp', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isDateOrTimestamp(values[index])).toBe(index < 4 || index === 6);
	}
});

test('isTimestamp', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isTimestamp(values[index])).toBe(index < 4);
	}
});
