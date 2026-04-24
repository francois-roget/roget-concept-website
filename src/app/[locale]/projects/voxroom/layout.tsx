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
			? 'VoxRoom — Sondages en direct pour formateurs | Roget Concept'
			: 'VoxRoom — Live Polling for Trainers | Roget Concept',
		description: isFr
			? "VoxRoom est un outil de sondage en temps réel pour les formateurs. QCM et nuages de mots, rejoindre en un code à 4 caractères, résultats instantanés sur le projecteur."
			: 'VoxRoom is a real-time polling tool for trainers. MCQ and word clouds, join with a 4-character code, results displayed instantly on the projector.',
		alternates: {
			canonical: `${BASE_URL}/${locale}/projects/voxroom`,
			languages: {
				en: `${BASE_URL}/en/projects/voxroom`,
				fr: `${BASE_URL}/fr/projects/voxroom`,
				'x-default': `${BASE_URL}/en/projects/voxroom`,
			},
		},
		openGraph: {
			title: isFr
				? 'VoxRoom — Sondages en direct pour formateurs'
				: 'VoxRoom — Live Polling for Trainers',
			description: isFr
				? "Outil de sondage en temps réel pour sessions de formation — QCM, nuages de mots, résultats instantanés."
				: 'Real-time polling tool for training sessions — MCQ, word clouds, instant results.',
			url: `${BASE_URL}/${locale}/projects/voxroom`,
			siteName: 'Roget Concept',
			type: 'website',
		},
	};
}

export default async function VoxroomLayout({
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
				name: 'VoxRoom',
				item: `${BASE}/${locale}/projects/voxroom`,
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
