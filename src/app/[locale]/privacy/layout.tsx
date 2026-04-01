import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const BASE_URL = 'https://www.roget-concept.be'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const isFr = locale === 'fr'

	return {
		title: isFr
			? 'Politique de confidentialité — Roget Concept'
			: 'Privacy Policy — Roget Concept',
		description: isFr
			? 'Politique de confidentialité de Roget Concept SRL. Aucun cookie, aucune donnée personnelle collectée ou stockée.'
			: 'Privacy policy for Roget Concept SRL. No cookies, no personal data collected or stored.',
		alternates: {
			canonical: `${BASE_URL}/${locale}/privacy`,
			languages: {
				en: `${BASE_URL}/en/privacy`,
				fr: `${BASE_URL}/fr/privacy`,
				'x-default': `${BASE_URL}/en/privacy`,
			},
		},
	}
}

export default async function PrivacyLayout({
	children,
	params,
}: {
	children: ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const isFr = locale === 'fr'

	const breadcrumb = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: isFr ? 'Accueil' : 'Home',
				item: `${BASE_URL}/${locale}`,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: isFr ? 'Politique de confidentialité' : 'Privacy Policy',
				item: `${BASE_URL}/${locale}/privacy`,
			},
		],
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
			/>
			{children}
		</>
	)
}
