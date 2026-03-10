import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const redHatDisplay = localFont({
	src: './fonts/RedHatDisplay-Regular.ttf',
});

export const metadata: Metadata = {
	title: 'Roget Concept — Full Stack Development & Technical Training',
	description:
		'François Roget, Senior Full Stack Developer and Architect with 20+ years of experience. IT Consultancy, React/TypeScript expertise, and technical training.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${redHatDisplay.className} bg-primary text-white`}>
				{children}
			</body>
		</html>
	);
}
