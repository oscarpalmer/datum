import {maximumTime, minimumTime} from '../constants';

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

export * from './relative';
