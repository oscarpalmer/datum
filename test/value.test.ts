import {expect, test} from 'vitest';
import {maximumTime, minimumTime} from '../src/constants';
import {compare, getDate, getRandomDate} from '../src/value';

const now = new Date();

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

test('compare', () => {
	const items = [
		{
			expected: -1,
			values: [null, 1],
		},
		{
			expected: 0,
			values: [null, null],
		},
		{
			expected: 1,
			values: [1, null],
		},
		{
			expected: -1,
			values: [1, 2],
		},
		{
			expected: 0,
			values: [1, 1],
		},
		{
			expected: 1,
			values: [2, 1],
		},
		{
			expected: -1,
			values: [new Date(now.getTime() - 1000), new Date(now.getTime())],
		},
		{
			expected: 0,
			values: [now, now],
		},
		{
			expected: 1,
			values: [new Date(now.getTime()), new Date(now.getTime() - 1000)],
		},
		{
			expected: -1,
			values: [now.getTime() - 1000, new Date(now.getTime())],
		},
		{
			expected: 0,
			values: [now, now],
		},
		{
			expected: 1,
			values: [new Date(now.getTime()), now.getTime() - 1000],
		},
	];

	const {length} = items;

	for (let index = 0; index < length; index += 1) {
		const {expected, values} = items[index];

		expect(compare(values[0], values[1])).toBe(expected);
	}
});

test('getDate', () => {
	for (let index = 0; index < length; index += 1) {
		if (index < 4 || index === 6) {
			expect(getDate(values[index])).toBeInstanceOf(Date);
		} else {
			expect(getDate(values[index])).toBeUndefined();
		}
	}
});

test('getRandomDate', () => {
	const size = 10_000;

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate();

		expect(random.getTime()).toBeGreaterThanOrEqual(minimumTime);
		expect(random.getTime()).toBeLessThanOrEqual(maximumTime);
	}

	for (let index = 0; index < size; index += 1) {
		const random = getRandomDate(true);

		expect(random).toBeGreaterThanOrEqual(minimumTime);
		expect(random).toBeLessThanOrEqual(maximumTime);
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
