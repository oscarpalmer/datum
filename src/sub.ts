import {getOffsetDay} from './internal/day';

/**
 * Subtract days from a _Date_
 */
export function subtractDays(date: Date, days: number): Date {
	return getOffsetDay(-days, date);
}
