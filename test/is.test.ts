import {expect, test} from 'vitest';
import {isDate, isDateLike, isLeapYear, isTimestamp} from '../src/is';
import {length, values} from './_values';

test('isDate', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isDate(values[index])).toBe(index === 25);
	}
});

test('isDateLike', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isDateLike(values[index])).toBe(index < 27);
	}
});

test('isLeapYear', () => {
	const dates = [
		new Date('1504-05-03'),
		new Date('1600-07-15'),
		new Date('1696-02-29'),
		new Date('1704-10-12'),
		new Date('1796-06-07'),
		new Date('1804-03-20'),
		new Date('1896-09-01'),
		new Date('1904-05-14'),
		new Date('1996-04-23'),

		new Date('2000-01-01'),
		new Date('1501-12-31'),
		new Date('1601-01-01'),
		new Date('1701-07-04'),
		new Date('1800-02-14'),
		new Date('1900-01-01'),
		new Date('1901-12-31'),
		new Date('2001-10-31'),
		new Date('2002-01-01'),
		new Date('2003-01-01'),
		new Date('2023-04-30'),
	];

	const years = dates.map(v => v.getFullYear());
	const timestamps = dates.map(v => v.getTime());

	for (let index = 0; index < 20; index += 1) {
		expect(isLeapYear(dates[index])).toBe(index < 10);
		expect(isLeapYear(years[index])).toBe(index < 10);
		expect(isLeapYear(timestamps[index], true)).toBe(index < 10);
	}
});

test('isTimestamp', () => {
	for (let index = 0; index < length; index += 1) {
		expect(isTimestamp(values[index])).toBe(index < 4);
	}
});
