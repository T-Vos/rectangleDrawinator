'use client';

import { useState } from 'react';
import { json } from 'stream/consumers';

const getRandomNumber = (limit) => {
	return Math.floor(Math.random() * limit);
};

const RectanglesDisplay = ({ rectangles }) => {
	const [open, set] = useState(true);
	return (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
			onChange={() => set((state) => !state)}
		>
			{rectangles.map((rect, index: number) => {
				const number = rect.id % 360;
				const randomColor = `hsl(${number}deg, 50%, 10%)`;
				return (
					<div
						key={index}
						style={{
							width: `${rect.x}px`,
							height: `${rect.y}px`,
							backgroundColor: randomColor,
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
