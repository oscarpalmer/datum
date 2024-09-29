import {expect, test} from 'bun:test';
import {subtractDays} from '../src/sub';

test('subtractDays', () => {
	const date = new Date('2020-02-20');

	expect(subtractDays(date, 1)).toEqual(new Date('2020-02-19'));
	expect(subtractDays(date, 10)).toEqual(new Date('2020-02-10'));
	expect(subtractDays(date, -1)).toEqual(new Date('2020-02-21'));
	expect(subtractDays(date, -10)).toEqual(new Date('2020-02-30'));
});
