import {expect, test} from 'bun:test';
import {addDays} from '../src/add';

test('addDays', () => {
	const date = new Date('2020-02-20');

	expect(addDays(date, 1)).toEqual(new Date('2020-02-21'));
	expect(addDays(date, 10)).toEqual(new Date('2020-03-01'));
	expect(addDays(date, -1)).toEqual(new Date('2020-02-19'));
	expect(addDays(date, -10)).toEqual(new Date('2020-02-10'));
});
