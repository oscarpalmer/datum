import type {DateOrTimestamp} from '../models';
import {getDate} from './index';

/**
 * Get the day of the week from a date or timestamp _(as an index 0-6; NaN if invalid)_
 */
export function getDay(value: DateOrTimestamp): number {
	return getDate(value)?.getDay() ?? Number.NaN;
}

/**
 * Get the number of days in a month for a date or timestamp _(NaN if invalid)_
 */
export function getDaysInMonth(value: DateOrTimestamp): number {
	const date = getDate(value);

	if (date == null) {
		return Number.NaN;
	}

	const next = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	next.setHours(0, 0, 0, 0);

	return next.getDate();
}
