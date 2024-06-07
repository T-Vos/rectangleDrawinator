'use client';
const RectanglesDisplay = ({ rectangles }) => {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
			{rectangles.map((rect, index) => (
				<div
					key={index}
					style={{
						width: `${rect.x}px`,
						height: `${rect.y}px`,
						backgroundColor: 'lightblue',
						border: '1px solid black',
						boxSizing: 'border-box',
					}}
				/>
			))}
		</div>
	);
};

export default RectanglesDisplay;
