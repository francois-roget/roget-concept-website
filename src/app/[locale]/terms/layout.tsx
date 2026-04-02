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
			? 'Conditions Générales — Roget Concept'
			: 'Terms of Service — Roget Concept',
		description: isFr
			? 'Conditions générales de prestations de services informatiques de Roget Concept SRL.'
			: 'Terms and conditions for IT services and technical training by Roget Concept SRL.',
		alternates: {
			canonical: `${BASE_URL}/${locale}/terms`,
			languages: {
				en: `${BASE_URL}/en/terms`,
				fr: `${BASE_URL}/fr/terms`,
				'x-default': `${BASE_URL}/en/terms`,
			},
		},
	}
}

export default async function TermsLayout({
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
				name: isFr ? 'Conditions Générales' : 'Terms of Service',
				item: `${BASE_URL}/${locale}/terms`,
			},
		],
	}

	const webPage = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': `${BASE_URL}/${locale}/terms#webpage`,
		url: `${BASE_URL}/${locale}/terms`,
		name: isFr
			? 'Conditions Générales — Roget Concept'
			: 'Terms of Service — Roget Concept',
		isPartOf: { '@id': `${BASE_URL}/#website` },
		inLanguage: locale,
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
			/>
			{children}
		</>
	)
}
