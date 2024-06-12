import { SurfaceDisplay } from '../helpers/rectangleType';
import React, { useState } from 'react';
import styles from '../styles/components.module.css';

export const ListContainer = ({ children }: { children: any }) => {
	const [selectedRectIndex, setSelectedRectIndex] = useState<number | null>(
		null
	);

	const handleRectClick = (index: number) => {
		// Toggle selection state: if the index is already selected, deselect it, otherwise select it
		setSelectedRectIndex(index);
	};

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
			{React.Children.map(children, (child, index) => (
				<div
					key={index}
					className={`${styles.surfaceBlock} ${
						selectedRectIndex === index ? styles.selected : ''
					}`}
					onClick={() => handleRectClick(index)}
				>
					{React.cloneElement(child, {
						isSelected: selectedRectIndex === index,
					})}
				</div>
			))}
			{selectedRectIndex}
		</div>
	);
};

interface RectangleProps {
	rect: SurfaceDisplay;
	onInputChange: (
		id: number,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
}
export const Rectangle: React.FC<RectangleProps & { isSelected: boolean }> = ({
	rect,
	onInputChange,
	isSelected,
}) => {
	return (
		<div
			className={styles.surfaceBlock}
			style={{
				width: `${rect.x}px`,
				height: `${rect.y}px`,
				backgroundColor: rect.surfaceColor ?? 'aqua',
			}}
		>
			{isSelected && (
				<input
					type="text"
					placeholder="Enter text"
					style={{ width: '100%', marginTop: '10px' }}
					value={rect.surfaceName}
					onChange={(event) => onInputChange(rect.id, event)}
				/>
			)}
		</div>
	);
};
