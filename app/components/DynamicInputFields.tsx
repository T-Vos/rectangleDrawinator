'use client';

import { useState } from 'react';

const DynamicInputFields = ({ onRectanglesChange }) => {
	const [fields, setFields] = useState([{ id: 1, x: '', y: '' }]);

	const handleInputChange = (id, event) => {
		const newFields = fields.map((field) => {
			if (field.id === id) {
				return { ...field, [event.target.name]: event.target.value };
			}
			return field;
		});
		setFields(newFields);

		// Add a new pair of inputs if the last pair is not empty
		if (newFields.every((field) => field.x !== '' || field.y !== '')) {
			setFields([...newFields, { id: fields.length + 1, x: '', y: '' }]);
		}

		// Update rectangles in the parent component
		const rectangles = newFields
			.filter((field) => field.x && field.y)
			.map((field) => ({
				x: parseInt(field.x, 10),
				y: parseInt(field.y, 10),
			}));
		onRectanglesChange(rectangles);
	};

	return (
		<div>
			{fields.map((field) => (
				<div key={field.id}>
					<input
						type="number"
						name="x"
						value={field.x}
						onChange={(event) => handleInputChange(field.id, event)}
						placeholder="X length"
					/>
					<input
						type="number"
						name="y"
						value={field.y}
						onChange={(event) => handleInputChange(field.id, event)}
						placeholder="Y length"
					/>
				</div>
			))}
		</div>
	);
};

export default DynamicInputFields;
