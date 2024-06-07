import { ChangeEvent } from 'react';
import styles from '../styles/components.module.css';

type Field = {
	id: number;
	x: string;
	y: string;
	count: string;
};

type DynamicInputFieldsProps = {
	fields: Field[];
	onInputChange: (id: number, event: ChangeEvent<HTMLInputElement>) => void;
};

const DynamicInputFields: React.FC<DynamicInputFieldsProps> = ({
	fields,
	onInputChange,
}) => {
	return (
		<div className={styles.inputsList}>
			{fields.map((field) => (
				<div className={styles.formField} key={field.id}>
					<input
						type="number"
						name="x"
						value={field.x}
						onChange={(event) => onInputChange(field.id, event)}
						placeholder="X length"
						className={styles.numberInput}
					/>
					<input
						type="number"
						name="y"
						value={field.y}
						onChange={(event) => onInputChange(field.id, event)}
						placeholder="Y length"
						className={styles.numberInput}
					/>
					<input
						type="number"
						name="count"
						value={field.count}
						onChange={(event) => onInputChange(field.id, event)}
						placeholder="Count"
						className={styles.numberInput}
					/>
				</div>
			))}
		</div>
	);
};

export default DynamicInputFields;
