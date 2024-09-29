import {expect, test} from 'bun:test';
import {maximumTime, minimumTime} from '../src/constants';
import {getDate, now, today, tomorrow, yesterday} from '../src/value';

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

test('now', () => {
	const date = now();
	const time = now(true);

	expect(date).toBeInstanceOf(Date);
	expect(time).toBeNumber();

	expect(date.getTime() >= time - 4 && date.getTime() <= time + 4).toBeTrue();
});

test('today', () => {
	expect(today()).toBeInstanceOf(Date);
	expect(today(true)).toBeNumber();
	expect(today(true)).toBeLessThan(Date.now());
	expect(today().getTime()).toEqual(today(true));
});

test('tomorrow & yesterday', () => {
	const methods = [tomorrow, yesterday];

	for (const method of methods) {
		const date = method();
		const time = method(true);

		expect(date).toBeInstanceOf(Date);
		expect(time).toBeNumber();

		expect(date.getTime() >= time - 4 && date.getTime() <= time + 4).toBeTrue();

		const then = new Date('2000-01-01');

		const relativeDate = method(then);
		const relativeTime = method(then, true);

		expect(relativeDate).toBeInstanceOf(Date);
		expect(relativeTime).toBeNumber();

		expect(
			relativeDate.getTime() >= relativeTime - 4 &&
				relativeDate.getTime() <= relativeTime + 4,
		).toBeTrue();

		expect(relativeDate).toEqual(
			method === tomorrow ? new Date('2000-01-02') : new Date('1999-12-31'),
		);
	}
});
