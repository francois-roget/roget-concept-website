import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import './globals.css';

const redHatDisplay = localFont({
	src: './fonts/RedHatDisplay-Variable.ttf',
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
			<body className={`${redHatDisplay.className} antialiased`}>
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	);
}
