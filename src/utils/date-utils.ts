export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}

export function formatPostDateForDisplay(date: Date): string {
	const pad2 = (n: number) => String(n).padStart(2, "0");

	const isDateOnly =
		date.getUTCHours() === 0 &&
		date.getUTCMinutes() === 0 &&
		date.getUTCSeconds() === 0 &&
		date.getUTCMilliseconds() === 0;

	const y = date.getUTCFullYear();
	const m = date.getUTCMonth() + 1;
	const d = date.getUTCDate();

	const datePart = `${y}年${m}月${d}日`;
	if (isDateOnly) return datePart;

	const hh = pad2(date.getUTCHours());
	const mm = pad2(date.getUTCMinutes());
	const ss = pad2(date.getUTCSeconds());

	const timePart =
		date.getUTCSeconds() !== 0 ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
	return `${datePart} ${timePart}`;
}
