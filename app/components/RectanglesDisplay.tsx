'use client';

import { useState } from 'react';
import { Rectangle } from '../helpers/rectangleType';
const RectanglesDisplay = ({ rectangles }: { rectangles: Rectangle[] }) => {
	// Flatten the rectangles array based on the count property
	const expandedRectangles = rectangles.flatMap((rect: Rectangle) => {
		const count = rect.count >= 1 ? rect.count : 1;
		return Array(count).fill(rect);
	});

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
			{expandedRectangles.map((rect: Rectangle, index: number) => {
				return (
					<div
						key={index}
						style={{
							width: `${rect.x}px`,
							height: `${rect.y}px`,
							backgroundColor: rect.color,
							border: '1px solid black',
							boxSizing: 'border-box',
						}}
					>
						{/* {JSON.stringify(rect)} */}
					</div>
				);
			})}
		</div>
	);
};

export default RectanglesDisplay;
