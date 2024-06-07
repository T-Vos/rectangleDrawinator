'use client';

import { useState } from 'react';
import { Rectangle } from '../helpers/rectangleType';
const RectanglesDisplay = ({ rectangles }: { rectangles: Rectangle[] }) => {
	const [open, set] = useState(true);
	return (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
			onChange={() => set((state) => !state)}
		>
			{rectangles.map((rect: Rectangle, index: number) => {
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
