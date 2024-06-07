import { ChangeEvent, useState } from 'react';
import styles from '../styles/components.module.css';
import { Rectangle } from '../helpers/rectangleType';

const getRandomNumber = (limit: number) => {
	return Math.floor(Math.random() * limit);
};

type Field = {
	id: number;
	x: string;
	y: string;
};

type DynamicInputFieldsProps = {
	onRectanglesChange: (rectangles: Rectangle[]) => void;
};

const DynamicInputFields: React.FC<DynamicInputFieldsProps> = ({
	onRectanglesChange,
}) => {
	const [fields, setFields] = useState([
		{ id: getRandomNumber(1000), x: '', y: '' },
	]);

	const handleInputChange = (
		id: number,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const newFields = fields.map((field) => {
			if (field.id === id) {
				return { ...field, [event.target.name]: event.target.value };
			}
			return field;
		});
		setFields(newFields);

		// Add a new pair of inputs if the last pair is not empty
		if (newFields.every((field) => field.x !== '' || field.y !== '')) {
			setFields([...newFields, { id: getRandomNumber(1000), x: '', y: '' }]);
		}

		// Update rectangles in the parent component
		const rectangles = newFields
			.filter((field) => field.x && field.y)
			.map((field) => {
				const x = parseInt(field.x, 10);
				const y = parseInt(field.y, 10);
				const id = getRandomNumber(x * y + 500);
				return {
					x: x,
					y: y,
					id: id,
				};
			});
		onRectanglesChange(rectangles);
	};

	return (
		<div className={styles.inputsList}>
			{fields.map((field) => (
				<div className={styles.formField} key={field.id}>
					<input
						type="number"
						name="x"
						value={field.x}
						onChange={(event) => handleInputChange(field.id, event)}
						placeholder="X length"
						className={styles.numberInput}
					/>
					<input
						type="number"
						name="y"
						value={field.y}
						onChange={(event) => handleInputChange(field.id, event)}
						placeholder="Y length"
						className={styles.numberInput}
					/>
				</div>
			))}
		</div>
	);
};

export default DynamicInputFields;
