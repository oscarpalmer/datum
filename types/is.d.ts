/**
 * Is the value a _Date_?
 */
export declare function isDate(value: unknown): value is Date;
/**
 * Is the value a _Date_ or valid timestamp?
 */
export declare function isDateOrTimestamp(value: unknown): value is Date | number;
/**
 * Is the value a valid timestamp?
 */
export declare function isTimestamp(value: unknown): value is number;
