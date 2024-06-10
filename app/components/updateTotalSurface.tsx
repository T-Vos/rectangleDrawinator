'use client';

import { ChangeEvent } from 'react';
import styles from '../styles/components.module.css';

type DynamicInputFieldsProps = {
	totalSurface: number | string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TotalSurface: React.FC<DynamicInputFieldsProps> = ({
	totalSurface,
	onInputChange,
}) => {
	return (
		<div className={styles.formField}>
			<input
				type="number"
				value={totalSurface}
				onChange={(event) => onInputChange(event)}
				placeholder="Total surface m2"
				className={styles.numberInput}
			/>
		</div>
	);
};

export default TotalSurface;
