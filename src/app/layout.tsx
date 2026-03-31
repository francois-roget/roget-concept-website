import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { structuredData } from './structured-data';
import './globals.css';

const redHatDisplay = localFont({
	src: './fonts/RedHatDisplay-Variable.ttf',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.roget-concept.be'),
	alternates: {
		canonical: '/',
	},
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
		url: 'https://www.roget-concept.be',
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
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className={`${redHatDisplay.className} antialiased`}>
				<LanguageProvider>{children}</LanguageProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
