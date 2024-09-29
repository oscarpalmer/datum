import {expect, test} from 'bun:test';
import {now, today, tomorrow, yesterday} from '../src/relative';

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
	}
});
