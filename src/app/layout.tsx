import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });
const redHatDisplay = localFont({
	src: './fonts/RedHatDisplay-Regular.ttf',
});

export const metadata: Metadata = {
	title: 'Roget Concept',
	description: 'Your partner in full stack development',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${redHatDisplay.className} bg-primary`}>
				<main className="max-w-7xl mx-auto bg-primary text-white">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
