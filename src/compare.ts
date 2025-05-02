import {getDate} from './get';
import type {DateLike} from './models';

/**
 * - Compare two date-like values
 * - Returns `0`, `1`, or `-1`; useful for array sorting
 */
export function compare(first: DateLike, second: DateLike): number {
	const firstTime = getDate(first)?.getTime();
	const secondTime = getDate(second)?.getTime();

	if (Object.is(firstTime, secondTime)) {
		return 0;
	}

	if (firstTime == null || secondTime == null) {
		return firstTime == null ? -1 : 1;
	}

	return firstTime > secondTime ? 1 : -1;
}
