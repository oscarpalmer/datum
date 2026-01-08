import {getRandomInteger} from '@oscarpalmer/atoms/random';
import {MAXIMUM_TIME, MINIMUM_TIME} from './constants';
import type {DateLike} from './models';
import {parseDate} from './parse';

/**
 * Get the day of the week from a date or timestamp _(as an index 0-6; NaN if invalid)_
 */
export function getDay(value: DateLike): number {
	return getDate(value)?.getDay() ?? Number.NaN;
}

/**
 * Get the number of days in a month for a date or timestamp _(NaN if invalid)_
 */
export function getDaysInMonth(value: DateLike): number {
	const date = getDate(value);

	if (date == null) {
		return Number.NaN;
	}

	const next = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	next.setHours(0, 0, 0, 0);

	return next.getDate();
}

/**
 * Get the _Date_ from a value
 */
export function getDate(value: unknown): Date | undefined {
	if (value instanceof Date) {
		return value;
	}

	if (typeof value === 'number' && value >= MINIMUM_TIME && value <= MAXIMUM_TIME) {
		return new Date(value);
	}

	if (typeof value === 'string') {
		return parseDate(value);
	}
}

/**
 * Get a random _Date_
 */
export function getRandomDate(): Date;

/**
 * Get a random _Date_ as a timestamp
 */
export function getRandomDate(timestamp: true): number;

/**
 * Get a random _Date_ between two dates or timestamps
 */
export function getRandomDate(minimum: DateLike, maximum: DateLike): Date;

/**
 * Get a random timestamp between two dates or timestamps
 */
export function getRandomDate(minimum: DateLike, maximum: DateLike, timestamp: true): number;

export function getRandomDate(
	minimum?: DateLike | true,
	maximum?: DateLike,
	timestamp?: boolean,
): Date | number {
	const max = getDate(maximum)?.getTime() ?? MAXIMUM_TIME;

	const min = minimum === true ? MINIMUM_TIME : (getDate(minimum)?.getTime() ?? MINIMUM_TIME);

	const date = new Date(getRandomInteger(min, max));

	return minimum === true || timestamp === true ? date.getTime() : date;
}

/**
 * Get the timestamp from a value
 */
export function getTime(value: unknown): number {
	return getDate(value)?.getTime() ?? Number.NaN;
}
