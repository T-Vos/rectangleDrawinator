import { ChangeEvent } from 'react';
import { conversion } from '../helpers/rectangleType';
import styles from '../styles/components.module.css';

type conversionInputProps = {
	conversion: conversion;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ConversionInput: React.FC<conversionInputProps> = ({
	conversion,
	onInputChange,
}) => {
	return (
		<div className={styles.formField}>
			<input
				type="number"
				name="conversion_from"
				value={conversion.conversion_from}
				onChange={(event) => onInputChange(event)}
				placeholder="From"
				className={styles.numberInput}
			/>
			<p>To</p>
			<input
				type="number"
				name="conversion_to"
				value={conversion.conversion_to}
				onChange={(event) => onInputChange(event)}
				placeholder="To"
				className={styles.numberInput}
			/>
		</div>
	);
};

export default ConversionInput;
