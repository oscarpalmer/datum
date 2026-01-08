import {MAXIMUM_TIME, MINIMUM_TIME} from './constants';
import {getDate} from './get';
import type {DateLike} from './models';
import {parseDate} from './parse';

/**
 * Is the value a _Date_?
 */
export function isDate(value: unknown): value is Date {
	return value instanceof Date;
}

/**
 * Is the value like a date? _(Either a _Date_, timestamp, or parseable date string)_
 */
export function isDateLike(value: unknown): value is DateLike {
	return value instanceof Date || isTimestamp(value) || parseDate(value) != null;
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
	const year = value instanceof Date || timestamp === true ? getDate(value)?.getFullYear() : value;

	return typeof year === 'number' && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

/**
 * Is the value a timestamp?
 */
export function isTimestamp(value: unknown): value is number {
	return typeof value === 'number' && value >= MINIMUM_TIME && value <= MAXIMUM_TIME;
}
