import {expect, test} from 'vitest';
import {addDays} from '../src/add';

test('addDays', () => {
	const date = new Date('2020-02-20');

	expect(addDays(date, 1).toDateString()).toEqual(
		new Date('2020-02-21').toDateString(),
	);

	expect(addDays(date, 10).toDateString()).toEqual(
		new Date('2020-03-01').toDateString(),
	);

	expect(addDays(date, -1).toDateString()).toEqual(
		new Date('2020-02-19').toDateString(),
	);

	expect(addDays(date, -10).toDateString()).toEqual(
		new Date('2020-02-10').toDateString(),
	);
});
