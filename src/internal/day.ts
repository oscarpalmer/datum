export function getOffsetDay(offset: number, date?: Date): Date {
	const next = date == null ? new Date() : new Date(date);

	next.setDate(next.getDate() + offset);

	return next;
}
