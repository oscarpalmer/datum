import {expect, test} from 'bun:test';
import {maximumTime, minimumTime} from '../src/constants';
import {getDate} from '../src/value';

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
