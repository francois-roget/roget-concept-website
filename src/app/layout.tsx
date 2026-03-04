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
	title: 'Roget Concept — Full Stack Development & Technical Training',
	description:
		'François Roget, Senior Full Stack Developer and Architect with 20+ years of experience. IT Consultancy, React/TypeScript expertise, and technical training.',
	keywords: [
		'Full Stack Developer',
		'React',
		'TypeScript',
		'IT Consultancy',
		'Technical Training',
		'Software Architect',
	],
	openGraph: {
		title: 'Roget Concept — Full Stack Development & Technical Training',
		description:
			'François Roget, Senior Full Stack Developer and Architect with 20+ years of experience.',
		url: 'https://roget-concept.be',
		siteName: 'Roget Concept',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Roget Concept — Full Stack Development & Technical Training',
		description:
			'François Roget, Senior Full Stack Developer and Architect with 20+ years of experience.',
	},
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
