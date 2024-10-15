export function getDayAtMidnight(current?: Date, offset?: number): Date {
	const day = getOffsetDay(offset ?? 0, current);

	day.setHours(0, 0, 0, 0);

	return day;
}

export function getOffsetDay(offset: number, date?: Date): Date {
	const next = date == null ? new Date() : new Date(date);

	next.setUTCHours(0, 0, 0, 0);

	next.setDate(next.getDate() + offset);

	return next;
}
