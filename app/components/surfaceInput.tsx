import { ChangeEvent } from 'react';
import styles from '../styles/components.module.css';
import { SurfaceField } from '../helpers/rectangleType';

type DynamicInputFieldsProps = {
	surfaceFied: SurfaceField;
	onInputChange: (id: number, event: ChangeEvent<HTMLInputElement>) => void;
};

export const SurfaceInput: React.FC<DynamicInputFieldsProps> = ({
	surfaceFied,
	onInputChange,
}) => {
	return (
		<div className={styles.formField}>
			<input
				type="number"
				name="surface"
				value={surfaceFied.surface}
				onChange={(event) => onInputChange(surfaceFied.id, event)}
				placeholder="Surface"
				className={styles.numberInput}
			/>
			<input
				type="number"
				name="count"
				value={surfaceFied.count}
				onChange={(event) => onInputChange(surfaceFied.id, event)}
				placeholder="Count"
				className={styles.numberInput}
			/>
		</div>
	);
};

const SurfaceList = ({ children }: { children: any }) => {
	return <div className={styles.inputsList}>{children}</div>;
};

export default SurfaceList;
