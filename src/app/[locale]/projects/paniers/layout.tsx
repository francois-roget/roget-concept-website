import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = 'https://www.roget-concept.be';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const isFr = locale === 'fr';

	return {
		title: isFr
			? 'Paniers — App iOS liste de courses intelligente | Roget Concept'
			: 'Paniers — Smart Shopping List iOS App | Roget Concept',
		description: isFr
			? "Paniers est une liste de courses intelligente pour iPhone, iPad, Mac et Apple Watch. IA, partage familial et chiffrement iCloud — développée sans connaissance préalable de Swift."
			: 'Paniers is a smart shopping list for iPhone, iPad, Mac and Apple Watch. AI categorisation, family sharing, and iCloud encryption — built without prior Swift knowledge.',
		alternates: {
			canonical: `${BASE_URL}/${locale}/projects/paniers`,
			languages: {
				en: `${BASE_URL}/en/projects/paniers`,
				fr: `${BASE_URL}/fr/projects/paniers`,
				'x-default': `${BASE_URL}/en/projects/paniers`,
			},
		},
		openGraph: {
			title: isFr
				? 'Paniers — App iOS liste de courses intelligente'
				: 'Paniers — Smart Shopping List iOS App',
			description: isFr
				? "Liste de courses intelligente pour tous vos appareils Apple — IA, partage familial, chiffrement iCloud."
				: 'Smart shopping list for all your Apple devices — AI, family sharing, iCloud encryption.',
			url: `${BASE_URL}/${locale}/projects/paniers`,
			siteName: 'Roget Concept',
			type: 'website',
		},
	};
}

export default async function PaniersLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const isFr = locale === 'fr';
	const BASE = BASE_URL;

	const breadcrumb = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: isFr ? 'Accueil' : 'Home',
				item: `${BASE}/${locale}`,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: isFr ? 'Projets' : 'Projects',
				item: `${BASE}/${locale}#projects`,
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: 'Paniers',
				item: `${BASE}/${locale}/projects/paniers`,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
			/>
			{children}
		</>
	);
}
