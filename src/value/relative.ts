import {getOffsetDay} from '../internal/day';

function getRelative(offset: number, first: unknown, second: unknown): unknown {
	const current = first instanceof Date ? first : undefined;
	const next = getOffsetDay(offset, current);

	return first === true || second === true ? next.getTime() : next;
}

/**
 * Get the current _Date_
 */
export function now(): Date;

/**
 * Get the current _Date_ as a timestamp
 */
export function now(asTimestamp: true): number;

export function now(asTimestamp?: unknown): unknown {
	return asTimestamp === true ? Date.now() : new Date();
}

/**
 * Get the current _Date_ at midnight
 */
export function today(): Date;

/**
 * Get the current _Date_ at midnight as a timestamp
 */
export function today(asTimestamp: true): number;

export function today(asTimestamp?: unknown): unknown {
	return asTimestamp === true ? getOffsetDay(0).getTime() : getOffsetDay(0);
}

/**
 * Get the _Date_ at midnight of the next day
 */
export function tomorrow(): Date;

/**
 * Get the current _Date_ at midnight of the next day as a timestamp
 */
export function tomorrow(asTimestamp: true): number;

/**
 * Get the _Date_ at midnight of the next day
 */
export function tomorrow(date: Date): Date;

/**
 * Get the _Date_ at midnight of the next day as a timestamp
 */
export function tomorrow(date: Date, asTimestamp: true): number;

export function tomorrow(first?: unknown, second?: unknown): unknown {
	return getRelative(1, first, second);
}

/**
 * Get the current _Date_ at midnight of the previous day
 */
export function yesterday(): Date;

/**
 * Get the current _Date_ at midnight of the previous day as a timestamp
 */
export function yesterday(asTimestamp: true): number;

/**
 * Get the _Date_ at midnight of the previous day
 */
export function yesterday(date: Date): Date;

/**
 * Get the _Date_ at midnight of the previous day as a timestamp
 */
export function yesterday(date: Date, asTimestamp: true): number;

export function yesterday(first?: unknown, second?: unknown): unknown {
	return getRelative(-1, first, second);
}
