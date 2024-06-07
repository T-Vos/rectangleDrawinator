'use client';

import Head from 'next/head';
import { SetStateAction, useState } from 'react';
import styles from './styles/page.module.css';
import DynamicInputFields from './components/DynamicInputFields';
import RectanglesDisplay from './components/RectanglesDisplay';
import DownloadButton from './components/DownloadButton';
import { Rectangle } from './helpers/rectangleType';

export default function Home() {
	const [rectangles, setRectangles] = useState<Rectangle[]>([]);

	const handleRectanglesChange = (newRectangles: Rectangle[]) => {
		setRectangles(newRectangles);
	};

	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<h1 className={styles.title}>Rectangles Drawer</h1>
			</div>
			<div className={styles.inputGrid}>
				<div className={styles.inputSection}>
					<DynamicInputFields onRectanglesChange={handleRectanglesChange} />
					<DownloadButton rectangles={rectangles} />
				</div>
				<div className={styles.displaySection}>
					<RectanglesDisplay rectangles={rectangles} />
				</div>
			</div>
		</main>
	);
}
