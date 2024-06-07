'use client';

import { Rectangle } from '../helpers/rectangleType';
import { calculateDimensions } from '../utils/calculateDimension';
import styles from '../styles/components.module.css';

const DownloadButton = ({ rectangles }: { rectangles: Rectangle[] }) => {
	const dimensions = calculateDimensions(rectangles);
	const generateSVG = () => {
		let currentY = 10; // Start with some padding from the top
		const svgRectangles = rectangles
			.map((rect) => {
				const rectSvg = `
            <rect x="10" y="${currentY}" width="${rect.x}" height="${rect.y}" fill="lightblue" stroke="black" stroke-width="1" />
        `;
				currentY += rect.y + 10;
				return rectSvg;
			})
			.join('');

		const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${
							dimensions.maxWidth + 20
						}" height="${dimensions.totalHeight + rectangles.length * 20}">
                ${svgRectangles}
            </svg>
        `;

		const blob = new Blob([svgContent], {
			type: 'image/svg+xml;charset=utf-8',
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'rectangles.svg';
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<button className={styles.downloadButton} onClick={generateSVG}>
			Download SVG
		</button>
	);
};

export default DownloadButton;
