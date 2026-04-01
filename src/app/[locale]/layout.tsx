import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStructuredData } from '@/app/structured-data';

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

const BASE_URL = 'https://www.roget-concept.be';
const VALID_LOCALES = ['en', 'fr'];

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { locale } = await params;

	if (locale === 'fr') {
		return {
			title: 'Roget Concept — Développeur Full Stack & Formation Technique',
			description:
				"François Roget, développeur freelance senior full stack et architecte avec plus de 20 ans d'expérience. Disponible pour des missions de consultance IT, expertise React/TypeScript et formation technique.",
			keywords: [
				'Développeur Full Stack Freelance',
				'Développeur React Freelance',
				'React',
				'TypeScript',
				'Consultance IT',
				'Formation Technique',
				'Architecte Logiciel',
				'Belgique',
			],
			alternates: {
				canonical: `${BASE_URL}/fr`,
				languages: {
					en: `${BASE_URL}/en`,
					fr: `${BASE_URL}/fr`,
					'x-default': `${BASE_URL}/en`,
				},
			},
			openGraph: {
				title: 'Roget Concept — Développeur Full Stack & Formation Technique',
				description:
					"François Roget, développeur freelance senior full stack et architecte avec plus de 20 ans d'expérience.",
				url: `${BASE_URL}/fr`,
				siteName: 'Roget Concept',
				locale: 'fr_BE',
				alternateLocale: ['en_US'],
				type: 'website',
				images: [
					{
						url: '/og-image.jpg',
						width: 1200,
						height: 630,
						alt: 'François Roget — Développeur Full Stack Senior & Architecte',
					},
				],
			},
			twitter: {
				card: 'summary_large_image',
				title: 'Roget Concept — Développeur Full Stack & Formation Technique',
				description:
					"François Roget, développeur freelance senior full stack et architecte avec plus de 20 ans d'expérience.",
				images: ['/og-image.jpg'],
			},
		};
	}

	// Default: EN
	return {
		title: 'Roget Concept — Full Stack Development & Technical Training',
		description:
			'François Roget, Freelance Senior Full Stack Developer and Architect with 20+ years of experience. Available for IT Consultancy missions, React/TypeScript expertise, and technical training.',
		keywords: [
			'Freelance Full Stack Developer',
			'Freelance React Developer',
			'React',
			'TypeScript',
			'IT Consultancy',
			'Technical Training',
			'Software Architect',
			'Belgium',
		],
		alternates: {
			canonical: `${BASE_URL}/en`,
			languages: {
				en: `${BASE_URL}/en`,
				fr: `${BASE_URL}/fr`,
				'x-default': `${BASE_URL}/en`,
			},
		},
		openGraph: {
			title: 'Roget Concept — Full Stack Development & Technical Training',
			description:
				'François Roget, Freelance Senior Full Stack Developer and Architect with 20+ years of experience.',
			url: `${BASE_URL}/en`,
			siteName: 'Roget Concept',
			locale: 'en_US',
			alternateLocale: ['fr_BE'],
			type: 'website',
			images: [
				{
					url: '/og-image.jpg',
					width: 1200,
					height: 630,
					alt: 'François Roget — Senior Full Stack Developer & Architect',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Roget Concept — Full Stack Development & Technical Training',
			description:
				'François Roget, Freelance Senior Full Stack Developer and Architect with 20+ years of experience.',
			images: ['/og-image.jpg'],
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!VALID_LOCALES.includes(locale)) {
		notFound();
	}
	const structuredData = getStructuredData(locale as 'en' | 'fr');
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			{children}
		</>
	);
}
