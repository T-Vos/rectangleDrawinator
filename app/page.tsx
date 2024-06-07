'use client';

import { useState, ChangeEvent } from 'react';
import styles from './styles/page.module.css';
import DynamicInputFields from './components/DynamicInputFields';
import RectanglesDisplay from './components/RectanglesDisplay';
import DownloadButton from './components/DownloadButton';
import { Rectangle, asPositiveInteger } from './helpers/rectangleType';

const getRandomNumber = (limit: number) => {
	return Math.floor(Math.random() * limit);
};

type Field = {
	id: number;
	x: string;
	y: string;
	count: string;
};

export default function Home() {
	const [fields, setFields] = useState<Field[]>([
		{ id: 1, x: '', y: '', count: '1' },
	]);
	const [rectangles, setRectangles] = useState<Rectangle[]>([]);

	const handleInputChange = (
		id: number,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;
		const newFields = fields.map((field) => {
			if (field.id === id) {
				return { ...field, [name]: value };
			}
			return field;
		});
		setFields(newFields);

		// Automatically add a new field if the last one is filled
		const lastField = newFields[newFields.length - 1];
		if (lastField.x && lastField.y) {
			setFields([
				...newFields,
				{ id: newFields.length + 1, x: '', y: '', count: '1' },
			]);
		}

		// Update rectangles in the parent component
		updateRectangles(newFields);
	};

	const updateRectangles = (fields: Field[]) => {
		const newRectangles = fields
			.filter((field) => field.x && field.y)
			.map((field) => {
				const x = parseInt(field.x, 10);
				const y = parseInt(field.y, 10);
				let count = parseInt(field.count, 10);
				if (isNaN(count) || count < 1) {
					count = 1;
				} else {
					count = asPositiveInteger(count);
				}
				const randomColor = `hsl(${
					getRandomNumber(x * y + 500) % 360
				}deg, 50%, 70%)`;
				return {
					x: x,
					y: y,
					id: field.id,
					color: randomColor,
					count: count,
				};
			});
		setRectangles(newRectangles);
	};

	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h1 className={styles.title}>Rectangles Drawer 3000</h1>
				<p>
					Having a need to create rectangles of different sizes? Or just want to
					have some straight lines for fun? Try your best at this flexible
					rectangular machine
				</p>
			</div>
			<div className={styles.inputGrid}>
				<div className={styles.inputSection}>
					<DynamicInputFields
						fields={fields}
						onInputChange={handleInputChange}
					/>
					<DownloadButton rectangles={rectangles} />
				</div>
				<div className={styles.displaySection}>
					<RectanglesDisplay rectangles={rectangles} />
				</div>
			</div>
		</main>
	);
}
