/**
 * The number of milliseconds in a second
 */
export const SECOND = 1000;

/**
 * The number of milliseconds in an hour
 */
export const HOUR: number = 60 * 60 * SECOND;

/**
 * The number of milliseconds in a day
 */
export const DAY: number = 24 * HOUR;

/**
 * The maximum time that can be represented in milliseconds
 */
export const MAXIMUM_TIME: number = 1e8 * HOUR;

/**
 * The minimum time that can be represented in milliseconds
 */
export const MINIMUM_TIME: number = -MAXIMUM_TIME;

/**
 * The number of milliseconds in a minute
 */
export const MINUTE: number = 60 * SECOND;

/**
 * The number of milliseconds in a week
 */
export const WEEK: number = 7 * DAY;

/**
 * The number of milliseconds in a year
 */
export const YEAR: number = 365.2425 * DAY;
