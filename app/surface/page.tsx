'use client';

import { ChangeEvent, useState } from 'react';
import styles from '../styles/page.module.css';
import TotalSurface from '../components/updateTotalSurface';
import SurfaceList, { SurfaceInput } from '../components/surfaceInput';
import { SurfaceDisplay, SurfaceField } from '../helpers/rectangleType';

export default function Home() {
	const [totalSurface, settotalSurface] = useState<number | string>('');
	const [leftOverTotal, setLeftOverTotal] = useState<number>(0);
	const [surfaceInputs, setsurfaceInputs] = useState<SurfaceField[]>([
		{ id: 0, count: '', surface: '' },
	]);
	const [surfaceDisplay, setSurfaceDisplay] = useState<SurfaceDisplay[]>([]);

	const handleTotalSurfaceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		settotalSurface(parseInt(value, 10));
		recalculateLeftOverTotal;
	};

	const handleTotalSurfaceInputChange = (
		id: number,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;

		const updatedFields = surfaceInputs.map((field) => {
			if (field.id === id) {
				return { ...field, [name]: value };
			}
			return field;
		});
		setsurfaceInputs(updatedFields);
		const lastField = updatedFields[updatedFields.length - 1];
		if (lastField.surface && lastField.count) {
			setsurfaceInputs([
				...updatedFields,
				{ id: updatedFields.length + 1, count: '', surface: '' },
			]);
		}
		recalculateDisplayRectangles();
	};

	function recalculateDisplayRectangles() {
		const expandedRectangles = surfaceInputs.flatMap((rect: SurfaceField) => {
			const countString = rect.count.toString();
			const count = parseInt(countString, 10) >= 1 ? parseInt(countString) : 1;
			return Array(count).fill(rect);
		});
		recalculateLeftOverTotal();
		setSurfaceDisplay(expandedRectangles);
	}

	function recalculateLeftOverTotal() {
		const totalRectangelSurface = surfaceDisplay
			.filter((x) => x.surface != '')
			.reduce((totalHeight, rect) => {
				return totalHeight + parseInt(rect.surface.toString());
			}, 0);
		setLeftOverTotal(
			parseInt(totalSurface.toString(), 10) - totalRectangelSurface
		);
	}

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
					<TotalSurface
						totalSurface={totalSurface}
						onInputChange={handleTotalSurfaceChange}
					/>
					<SurfaceList>
						{surfaceInputs.map((surfaceInput) => (
							<SurfaceInput
								surfaceFied={surfaceInput}
								key={surfaceInput.id}
								onInputChange={handleTotalSurfaceInputChange}
							/>
						))}
					</SurfaceList>
					{leftOverTotal}
					{/** Create using blocks */}
					{/** How to divide the leftover blocks */}
				</div>
				<div className={styles.displaySection}>
					{JSON.stringify(surfaceDisplay)}
					{/* <RectanglesDisplay rectangles={rectangles} /> */}
				</div>
			</div>
		</main>
	);
}
