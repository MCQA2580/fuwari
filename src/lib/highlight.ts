export function escapeHtml(str: string): string {
	return (str || "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export function escapeRegExp(str: string): string {
	return (str || "").replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
}

export function highlightText(text: string, keyword: string): string {
	if (!text) return "";
	if (!keyword) return escapeHtml(text);
	const reg = new RegExp(`(${escapeRegExp(keyword)})`, "ig");
	return escapeHtml(text).replace(reg, '<span class="hl no-wrap">$1</span>');
}
