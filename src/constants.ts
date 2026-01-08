/**
 * The number of milliseconds in a second
 */
export const SECOND = 1000;

/**
 * The number of milliseconds in an hour
 */
export const HOUR = 60 * 60 * SECOND;

/**
 * The number of milliseconds in a day
 */
export const DAY = 24 * HOUR;

/**
 * The maximum time that can be represented in milliseconds
 */
export const MAXIMUM_TIME = 1e8 * HOUR;

/**
 * The minimum time that can be represented in milliseconds
 */
export const MINIMUM_TIME = -MAXIMUM_TIME;

/**
 * The number of milliseconds in a minute
 */
export const MINUTE = 60 * SECOND;

/**
 * The number of milliseconds in a week
 */
export const WEEK = 7 * DAY;

/**
 * The number of milliseconds in a year
 */
export const YEAR = 365.2425 * DAY;
