import {getOffsetDay} from './internal/day';
import type {DateLike} from './models';

/**
 * Subtract days from a _Date_
 */
export function subtractDays(date: DateLike, days: number): Date {
	return getOffsetDay(typeof days === 'number' ? -days : 0, date);
}
