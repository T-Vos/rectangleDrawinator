import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Rectangle drawer',
	description: 'Draw them in the way you want',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Head>
					<title>Rectangles Drawer</title>
					<meta
						name="description"
						content="Draw rectangles based on input lengths"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="./img/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="48x48"
						href="./img/favicons/favicon-48.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="./img/favicons/favicon-32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="./img/favicons/favicon-16.png"
					/>
				</Head>
				{children}
			</body>
		</html>
	);
}
