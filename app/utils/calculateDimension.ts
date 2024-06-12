export function cmToPx(cm: number) {
	const dpi = 96; // Assuming 96 DPI
	const ppd = window.devicePixelRatio; // Pixels per dot

	return ((cm * dpi * ppd) / 2.54).toFixed(2);
}

// import { Rectangle } from '../helpers/rectangleType';

// export const calculateTotalHeight = (rectangles: Rectangle[]) => {
// 	return rectangles.reduce((totalHeight, rect) => {
// 		return totalHeight + rect.y;
// 	}, 0);
// };
// export const calculateMaxWidth = (rectangles: Rectangle[]) => {
// 	if (rectangles.length === 0) return 0;
// 	return rectangles.reduce((maxWidth, rect) => {
// 		return Math.max(maxWidth, rect.x);
// 	}, rectangles[0].x);
// };

// export const calculateDimensions = (rectangles: Rectangle[]) => {
// 	let totalHeight = 0;
// 	let maxWidth = 0;

// 	for (const rect of rectangles) {
// 		totalHeight += rect.y;
// 		if (rect.x > maxWidth) {
// 			maxWidth = rect.x;
// 		}
// 	}

// 	return { totalHeight, maxWidth };
// };
