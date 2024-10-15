import {getRandomInteger} from '@oscarpalmer/atoms/random';
import {maximumTime, minimumTime} from '~/constants';
import type {DateOrTimestamp} from '~/models';

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

export * from '~/value/absolute';
export * from '~/value/relative';

