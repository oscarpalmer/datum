import type {DateLike} from '../models';
import {getDate} from '../get';

export function getOffsetDay(offset: number, date?: DateLike): Date {
	const current = getDate(date);
	const next = current == null ? new Date() : new Date(current);

	if (typeof offset === 'number') {
		next.setUTCHours(0, 0, 0, 0);

		next.setDate(next.getDate() + offset);
	}

	return next;
}
