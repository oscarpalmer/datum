import {expect, test} from 'vitest';
import {now, today, tomorrow, yesterday} from '../src/value/relative';

test('now', () => {
	const date = now();
	const time = now(true);

	expect(date).toBeInstanceOf(Date);
	expect(typeof time).toBe('number');

	expect(date.getTime() >= time - 4 && date.getTime() <= time + 4).toBe(true);
});

test('today', () => {
	expect(today()).toBeInstanceOf(Date);
	expect(typeof today(true)).toBe('number');
	expect(today(true)).toBeLessThan(Date.now());
	expect(today().getTime()).toEqual(today(true));
});

test('tomorrow & yesterday', () => {
	const methods = [tomorrow, yesterday];

	for (const method of methods) {
		const date = method();
		const time = method(true);

		expect(date).toBeInstanceOf(Date);
		expect(typeof time).toBe('number');

		expect(date.getTime() >= time - 4 && date.getTime() <= time + 4).toBe(true);

		const then = new Date('2000-01-01');

		const relativeDate = method(then);
		const relativeTime = method(then, true);

		expect(relativeDate).toBeInstanceOf(Date);
		expect(typeof relativeTime).toBe('number');

		expect(
			relativeDate.getTime() >= relativeTime - 4 &&
				relativeDate.getTime() <= relativeTime + 4,
		).toBe(true);

		expect(relativeDate.toDateString()).toEqual(
			(method === tomorrow
				? new Date('2000-01-02')
				: new Date('1999-12-31')
			).toDateString(),
		);
	}
});