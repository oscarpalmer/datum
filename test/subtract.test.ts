import {expect, test} from 'vitest';
import {subtractDays} from '../src/subtract';

test('subtractDays', () => {
	const date = new Date('2020-02-20');

	expect(subtractDays(date, 1).toDateString()).toEqual(
		new Date('2020-02-19').toDateString(),
	);

	expect(subtractDays(date, 10).toDateString()).toEqual(
		new Date('2020-02-10').toDateString(),
	);

	expect(subtractDays(date, -1).toDateString()).toEqual(
		new Date('2020-02-21').toDateString(),
	);

	expect(subtractDays(date, -10).toDateString()).toEqual(
		new Date('2020-02-30').toDateString(),
	);

	expect(subtractDays(date, 'blah' as never).toDateString()).toEqual(
		date.toDateString(),
	);
});
