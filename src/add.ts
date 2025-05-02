import {getOffsetDay} from './internal/day';
import type {DateLike} from './models';

/**
 * Add days to a _Date_
 */
export function addDays(date: DateLike, days: number): Date {
	return getOffsetDay(days, date);
}
