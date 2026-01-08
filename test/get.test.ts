import {expect, test} from 'vitest';
import {getDate, getDay, getDaysInMonth, getRandomDate, getTime} from '../src/get';
import {MAXIMUM_TIME, MINIMUM_TIME} from '../src/constants';
import {length, values} from './_values';

const days = [
	...Array.from({length: 12}, (_, index) => new Date(2020, index, 10)),
	...Array.from({length: 12}, (_, index) => new Date(2021, index, 10)),
];

test('getDate', () => {
	for (let index = 0; index < length; index += 1) {
		if (index < 27) {
			expect(getDate(values[index])).toBeInstanceOf(Date);
		} else {
			expect(getDate(values[index])).toBeUndefined();
		}
	}
});

test('getDay', () => {
	const expected = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];

	const {length} = days;

	for (let index = 0; index < length; index += 1) {
		expect(getDay(days[index])).toBe(expected[index]);
	}

	expect(getDay(Number.NEGATIVE_INFINITY)).toBeNaN();
	expect(getDay(Number.POSITIVE_INFINITY)).toBeNaN();
});

test('getDaysInMonth', () => {
	const expected = [
		31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
	];

	const {length} = days;

	for (let index = 0; index < length; index += 1) {
		expect(getDaysInMonth(days[index])).toBe(expected[index]);
	}

	expect(getDaysInMonth(Number.NEGATIVE_INFINITY)).toBeNaN();
	expect(getDaysInMonth(Number.POSITIVE_INFINITY)).toBeNaN();
});

test('getRandomDate', () => {
	const size = 10_000;

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate();

		expect(random.getTime()).toBeGreaterThanOrEqual(MINIMUM_TIME);
		expect(random.getTime()).toBeLessThanOrEqual(MAXIMUM_TIME);
	}

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(true);

		expect(random).toBeGreaterThanOrEqual(MINIMUM_TIME);
		expect(random).toBeLessThanOrEqual(MAXIMUM_TIME);
	}

	const maxDate = new Date('2024-12-31');
	const minDate = new Date('2020-01-01');

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(minDate, maxDate);

		expect(random.getTime()).toBeGreaterThanOrEqual(minDate.getTime());
		expect(random.getTime()).toBeLessThanOrEqual(maxDate.getTime());
	}

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(minDate, maxDate, true);

		expect(random).toBeGreaterThanOrEqual(minDate.getTime());
		expect(random).toBeLessThanOrEqual(maxDate.getTime());
	}

	const maxTime = maxDate.getTime();
	const minTime = minDate.getTime();

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(minTime, maxTime);

		expect(random.getTime()).toBeGreaterThanOrEqual(minTime);
		expect(random.getTime()).toBeLessThanOrEqual(maxTime);
	}

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(minTime, maxTime, true);

		expect(random).toBeGreaterThanOrEqual(minTime);
		expect(random).toBeLessThanOrEqual(maxTime);
	}
});

test('getTime', () => {
	for (let index = 0; index < length; index += 1) {
		if (index < 27) {
			expect(getTime(values[index])).not.toBeNaN();
		} else {
			expect(getTime(values[index])).toBeNaN();
		}
	}
});
