'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/page.module.css';
import TotalSurface from '../components/updateTotalSurface';
import SurfaceList, { SurfaceInput } from '../components/surfaceInput';
import {
	SurfaceDisplay,
	SurfaceField,
	conversion,
} from '../helpers/rectangleType';
import RectanglesDisplay from '../components/RectanglesDisplay';
import ConversionInput from '../components/conversionInput';
import { cmToPx } from '../utils/calculateDimension';

export default function Home() {
	const [totalSurface, settotalSurface] = useState<number | string>('');
	const [leftOverTotal, setLeftOverTotal] = useState<number>(0);
	const [conversion, setConversion] = useState<conversion>({
		conversion_from: 200,
		conversion_to: 1,
	});
	const [surfaceInputs, setsurfaceInputs] = useState<SurfaceField[]>([
		{ id: 0, count: '', surface: '' },
	]);
	const [surfaceDisplay, setSurfaceDisplay] = useState<SurfaceDisplay[]>([]);

	const handleTotalSurfaceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		settotalSurface(parseInt(value, 10));
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
	};

	useEffect(() => {
		const _relevant_inputs = surfaceInputs.filter((x) => x.surface !== '');

		// const maxSurface = Math.max(
		// 	..._relevant_inputs.map((rect: SurfaceField) =>
		// 		parseInt(rect.surface.toString(), 10)
		// 	)
		// );

		// const scaleFactor = 150 / Math.sqrt(maxSurface);

		const expandedRectangles = _relevant_inputs.flatMap((rect) => {
			const countString = parseInt(rect.count.toString(), 10);
			const count = countString >= 1 ? countString : 1;

			const size = cmToPx(
				Math.sqrt(parseInt(rect.surface.toString(), 10)) *
					(conversion.conversion_to / conversion.conversion_from)
			);

			return Array(count).fill({
				...rect,
				x: size,
				y: size,
				surfaceName: '',
				rectGroupid: rect.id,
			});
		});

		setSurfaceDisplay(expandedRectangles);
	}, [surfaceInputs]);

	useEffect(() => {
		const _totalRectangelSurface =
			surfaceDisplay
				.filter((x) => x.surface != '')
				.reduce((totalHeight, rect) => {
					return totalHeight + parseInt(rect.surface.toString()) || 0;
				}, 0) || 0;

		const _totalSurface: number = parseInt(totalSurface.toString(), 10) || 0;

		const result = _totalSurface - _totalRectangelSurface;
		setLeftOverTotal(result);
	}, [surfaceDisplay, surfaceInputs]);

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
					<ConversionInput conversion={conversion} />
					<RectanglesDisplay rectangles={surfaceDisplay} />
					{JSON.stringify(surfaceDisplay)}
				</div>
			</div>
		</main>
	);
}
