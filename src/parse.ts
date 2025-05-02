/**
 * Parse value as a date
 */
export function parse(value: unknown): Date | undefined {
	if (typeof value !== 'string') {
		return;
	}

	const date = new Date(value);

	if (date.toJSON() === value) {
		return date;
	}
}
