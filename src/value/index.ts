import {getRandomInteger} from '@oscarpalmer/atoms/random';
import {maximumTime, minimumTime} from '~/constants';
import type {DateOrTimestamp} from '~/models';

/**
 * - Compare two dates or timestamps
 * - Returns `0`, `1`, or `-1`, useful for array sorting
 */
export function compare(
	first: DateOrTimestamp,
	second: DateOrTimestamp,
): number {
	const firstTime = getTime(first);
	const secondTime = getTime(second);

	if (Number.isNaN(firstTime) || Number.isNaN(secondTime)) {
		return Number.isNaN(firstTime) ? (Number.isNaN(secondTime) ? 0 : -1) : 1;
	}

	if (firstTime === secondTime) {
		return 0;
	}

	return firstTime > secondTime ? 1 : -1;
}

/**
 * Get the _Date_ from a value
 */
export function getDate(value: unknown): Date | undefined {
	if (value instanceof Date) {
		return value;
	}

	if (
		typeof value === 'number' &&
		value >= minimumTime &&
		value <= maximumTime
	) {
		return new Date(value);
	}
}

/**
 * Get a random _Date_
 */
export function getRandomDate(): Date;

/**
 * Get a random _Date_ as a timestamp
 */
export function getRandomDate(asTimestamp: true): number;

/**
 * Get a random _Date_ between two dates or timestamps
 */
export function getRandomDate(
	minimum: DateOrTimestamp,
	maximum: DateOrTimestamp,
): Date;

/**
 * Get a random timestamp between two dates or timestamps
 */
export function getRandomDate(
	minimum: DateOrTimestamp,
	maximum: DateOrTimestamp,
	asTimestamp: true,
): number;

export function getRandomDate(
	minimum?: DateOrTimestamp | true,
	maximum?: DateOrTimestamp,
	asTimestamp?: boolean,
): Date | number {
	const max = getDate(maximum)?.getTime() ?? maximumTime;

	const min =
		minimum === true
			? minimumTime
			: (getDate(minimum)?.getTime() ?? minimumTime);

	const date = new Date(getRandomInteger(min, max));

	return minimum === true || asTimestamp === true ? date.getTime() : date;
}

/**
 * Get the timestamp from a value
 */
export function getTime(value: unknown): number {
	if (value instanceof Date) {
		return value.getTime();
	}

	if (
		typeof value === 'number' &&
		value >= minimumTime &&
		value <= maximumTime
	) {
		return value;
	}

	return Number.NaN;
}

export * from '~/value/absolute';
export * from '~/value/relative';

