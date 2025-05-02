import {expect, test} from 'vitest';
import {compare} from '../src/compare';

const now = new Date();

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

		expect(compare(values[0] as never, values[1] as never)).toBe(expected);
	}
});
