import {expect, test} from 'vitest';
import {maximumTime, minimumTime} from '../src/constants';
import {getDate, getRandomDate} from '../src/value';

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
