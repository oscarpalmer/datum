export function getOffsetDay(offset: number, date?: Date): Date {
	const next = date == null ? new Date() : new Date(date);

	next.setUTCHours(0, 0, 0, 0);

	next.setDate(next.getDate() + offset);

	return next;
}
