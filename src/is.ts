import {maximumTime, minimumTime} from '~/constants';
import type {DateOrTimestamp} from '~/models';
import {getDate} from '~/value/index';

/**
 * Is the value a _Date_?
 */
export function isDate(value: unknown): value is Date {
	return value instanceof Date;
}

/**
 * Is the value a _Date_ or timestamp?
 */
export function isDateOrTimestamp(value: unknown): value is DateOrTimestamp {
	return value instanceof Date || isTimestamp(value);
}

/**
 * Is the date part of a leap year?
 */
export function isLeapYear(date: Date): boolean;

/**
 * Is the year a leap year?
 */
export function isLeapYear(year: number): boolean;

/**
 * Is the timestamp from a leap year?
 */
export function isLeapYear(value: number, timestamp: true): boolean;

export function isLeapYear(value: unknown, timestamp?: boolean): boolean {
	const year =
		value instanceof Date || timestamp === true
			? getDate(value)?.getFullYear()
			: value;

	return (
		typeof year === 'number' &&
		(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
	);
}

/**
 * Is the value a timestamp?
 */
export function isTimestamp(value: unknown): value is number {
	return (
		typeof value === 'number' && value >= minimumTime && value <= maximumTime
	);
}
