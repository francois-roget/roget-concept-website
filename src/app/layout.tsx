import type { Metadata } from 'next';
import { headers } from 'next/headers';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { structuredData } from './structured-data';
import './globals.css';

const redHatDisplay = localFont({
	src: './fonts/RedHatDisplay-Variable.woff2',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.roget-concept.be'),
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = await headers();
	const locale = headersList.get('x-locale') ?? 'en';

	return (
		<html lang={locale}>
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
