import {getOffsetDay} from './internal/day';

/**
 * Add days to a _Date_
 */
export function addDays(date: Date, days: number): Date {
	return getOffsetDay(days, date);
}
