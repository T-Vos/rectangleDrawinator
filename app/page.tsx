'use client';

import Head from 'next/head';
import { useState } from 'react';
import styles from './styles/page.module.css';
import DynamicInputFields from './components/DynamicInputFields';
import RectanglesDisplay from './components/RectanglesDisplay';

export default function Home() {
	const [rectangles, setRectangles] = useState([]);

	const handleRectanglesChange = (newRectangles) => {
		setRectangles(newRectangles);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Rectangles Drawer</title>
				<meta
					name="description"
					content="Draw rectangles based on input lengths"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Rectangles Drawer</h1>
				<div className={styles.splitScreen}>
					<div className={styles.inputSection}>
						<DynamicInputFields onRectanglesChange={handleRectanglesChange} />
					</div>
					<div className={styles.displaySection}>
						<RectanglesDisplay rectangles={rectangles} />
					</div>
				</div>
			</main>
		</div>
	);
}
