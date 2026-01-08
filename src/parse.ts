/**
 * Parse value as a date
 */
export function parseDate(value: unknown): Date | undefined {
	if (typeof value !== 'string') {
		return;
	}

	const parsed = Date.parse(value);

	if (!Number.isNaN(parsed)) {
		return new Date(parsed);
	}

	const matches = EXPRESSION.exec(value);

	if (matches == null) {
		return;
	}

	const values = matches.slice(1, 8).map(v => (v == null ? 0 : Number.parseInt(v)));

	return new Date(
		values[0] < MILLENIUM_YEARS ? values[0] + MILLENIUM_START : values[0],
		values[1] - 1,
		Math.max(values[2], 1),
		values[3],
		values[4],
		values[5],
		values[6],
	);
}

//

const EXPRESSION =
	/^(\d{2,4})(?:-(0?[1-9]|1[0-2])(?:-(0?[1-9]|[12]\d|3[01])(?:[\st]([01]?\d|2[0-3])(?::([0-5]?\d)(?::([0-5]?\d)(?:\.(\d{1,3}))?)?)?(?:z|[+-]\d{2}:?\d{2})?)?)?)?$/i;

const MILLENIUM_START = 2_000;

const MILLENIUM_YEARS = 1_000;
