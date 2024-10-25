/**
 * The number of milliseconds in a second
 */
export const second = 1000;

/**
 * The number of milliseconds in an hour
 */
export const hour = 60 * 60 * second;

/**
 * The number of milliseconds in a day
 */
export const day = 24 * hour;

/**
 * The maximum time that can be represented in milliseconds
 */
export const maximumTime = 1e8 * hour;

/**
 * The minimum time that can be represented in milliseconds
 */
export const minimumTime = -maximumTime;

/**
 * The number of milliseconds in a minute
 */
export const minute = 60 * second;

/**
 * The number of milliseconds in a week
 */
export const week = 7 * day;

/**
 * The number of milliseconds in a year
 */
export const year = 365.2425 * day;
