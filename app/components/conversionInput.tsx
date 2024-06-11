import { conversion } from '../helpers/rectangleType';
import styles from '../styles/components.module.css';

const ConversionInput = ({ conversion }: { conversion: conversion }) => {
	return (
		<div className={styles.formField}>
			<input
				type="number"
				name="From"
				value={conversion.conversion_from}
				// onChange={(event) => onInputChange(field.id, event)}
				placeholder="X length"
				className={styles.numberInput}
			/>
			<p>To</p>
			<input
				type="number"
				name="To"
				value={conversion.conversion_to}
				// onChange={(event) => onInputChange(field.id, event)}
				placeholder="X length"
				className={styles.numberInput}
			/>
		</div>
	);
};

export default ConversionInput;
