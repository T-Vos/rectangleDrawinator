export const calculateTotalHeight = (rectangles) => {
	return rectangles.reduce((totalHeight, rect) => {
		return totalHeight + rect.y;
	}, 0);
};
export const calculateMaxWidth = (rectangles) => {
	if (rectangles.length === 0) return 0;
	return rectangles.reduce((maxWidth, rect) => {
		return Math.max(maxWidth, rect.x);
	}, rectangles[0].x);
};

export const calculateDimensions = (rectangles) => {
	let totalHeight = 0;
	let maxWidth = 0;

	for (const rect of rectangles) {
		totalHeight += rect.y;
		if (rect.x > maxWidth) {
			maxWidth = rect.x;
		}
	}

	return { totalHeight, maxWidth };
};
