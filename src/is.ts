import {maximumTime, minimumTime} from './constants';

/**
 * Is the value a _Date_?
 */
export function isDate(value: unknown): value is Date {
	return value instanceof Date;
}

/**
 * Is the value a _Date_ or valid timestamp?
 */
export function isDateOrTimestamp(value: unknown): value is Date | number {
	return isDate(value) || isTimestamp(value);
}

/**
 * Is the value a valid timestamp?
 */
export function isTimestamp(value: unknown): value is number {
	return (
		typeof value === 'number' && value >= minimumTime && value <= maximumTime
	);
}
