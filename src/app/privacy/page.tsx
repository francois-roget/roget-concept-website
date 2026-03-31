'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/LanguageProvider';

const content = {
	en: {
		title: 'Privacy Policy',
		updated: 'Last updated: March 2026',
		sections: [
			{
				heading: '1. Controller',
				body: 'This website is operated by Roget Concept SRL, BTW BE 1008.928.573, represented by François Roget. Contact: francois@roget-concept.be',
			},
			{
				heading: '2. Data collected',
				body: 'This website uses Vercel Analytics and Vercel Speed Insights to measure traffic and performance. These tools collect the following data in aggregated, anonymous form:',
				list: [
					'Page views and navigation paths',
					'Country and region (derived from IP address — IP is never stored)',
					'Browser type and version',
					'Operating system and device type',
					'Screen resolution',
					'Core Web Vitals performance metrics (LCP, INP, CLS)',
				],
				note: 'No cookies are set. No personally identifiable information is collected or stored. No cross-site tracking takes place.',
			},
			{
				heading: '3. Purpose and legal basis',
				body: 'Data is collected solely to understand how the site is used and to improve its performance. The legal basis is legitimate interest (GDPR Art. 6(1)(f)).',
			},
			{
				heading: '4. Data retention',
				body: 'Aggregated analytics data is retained for up to 6 months by Vercel. No personal data is retained. For details on Vercel\'s data practices, see vercel.com/legal/privacy-policy.',
			},
			{
				heading: '5. Data sharing',
				body: 'Data is processed by Vercel, Inc. (infrastructure provider). No data is sold or shared with third parties for marketing purposes.',
			},
			{
				heading: '6. Your rights',
				body: 'Under GDPR, you have the right to access, rectify, erase, restrict processing of, and object to the processing of your personal data. Since no personal data is collected by this site, these rights apply primarily to any direct communications you have sent to francois@roget-concept.be.',
			},
			{
				heading: '7. Supervisory authority',
				body: 'You have the right to lodge a complaint with the Belgian Data Protection Authority (Autorité de protection des données / Gegevensbeschermingsautoriteit): www.dataprotectionauthority.be',
			},
		],
	},
	fr: {
		title: 'Politique de confidentialité',
		updated: 'Dernière mise à jour : mars 2026',
		sections: [
			{
				heading: '1. Responsable du traitement',
				body: 'Ce site est exploité par Roget Concept SRL, BTW BE 1008.928.573, représentée par François Roget. Contact : francois@roget-concept.be',
			},
			{
				heading: '2. Données collectées',
				body: 'Ce site utilise Vercel Analytics et Vercel Speed Insights pour mesurer le trafic et les performances. Ces outils collectent les données suivantes de manière agrégée et anonyme :',
				list: [
					'Pages vues et chemins de navigation',
					'Pays et région (dérivés de l\'adresse IP — l\'IP n\'est jamais stockée)',
					'Type et version du navigateur',
					'Système d\'exploitation et type d\'appareil',
					'Résolution d\'écran',
					'Métriques de performance Core Web Vitals (LCP, INP, CLS)',
				],
				note: 'Aucun cookie n\'est déposé. Aucune donnée personnelle identifiable n\'est collectée ou stockée. Aucun suivi inter-sites n\'a lieu.',
			},
			{
				heading: '3. Finalité et base juridique',
				body: 'Les données sont collectées uniquement pour comprendre l\'utilisation du site et améliorer ses performances. La base juridique est l\'intérêt légitime (RGPD Art. 6(1)(f)).',
			},
			{
				heading: '4. Conservation des données',
				body: 'Les données analytiques agrégées sont conservées jusqu\'à 6 mois par Vercel. Aucune donnée personnelle n\'est conservée. Pour plus de détails sur les pratiques de Vercel, consultez vercel.com/legal/privacy-policy.',
			},
			{
				heading: '5. Partage des données',
				body: 'Les données sont traitées par Vercel, Inc. (fournisseur d\'infrastructure). Aucune donnée n\'est vendue ni partagée avec des tiers à des fins commerciales.',
			},
			{
				heading: '6. Vos droits',
				body: 'En vertu du RGPD, vous disposez d\'un droit d\'accès, de rectification, d\'effacement, de limitation du traitement et d\'opposition concernant vos données personnelles. Ce site ne collectant aucune donnée personnelle, ces droits s\'appliquent principalement aux communications directes que vous avez adressées à francois@roget-concept.be.',
			},
			{
				heading: '7. Autorité de contrôle',
				body: 'Vous avez le droit d\'introduire une réclamation auprès de l\'Autorité de protection des données (Gegevensbeschermingsautoriteit) : www.dataprotectionauthority.be',
			},
		],
	},
};

export default function PrivacyPage() {
	const { locale } = useTranslation();
	const c = content[locale as keyof typeof content] ?? content.en;

	return (
		<div className="min-h-screen bg-[#12122e] text-white">
			<header className="max-w-[1160px] mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
				<Link href="/">
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={140}
						height={40}
					/>
				</Link>
				<Link
					href="/"
					className="text-sm text-white/40 hover:text-white transition-colors"
				>
					← {locale === 'fr' ? 'Retour au site' : 'Back to site'}
				</Link>
			</header>

			<main className="max-w-[760px] mx-auto px-6 lg:px-12 py-16">
				<h1 className="text-3xl lg:text-4xl font-black text-white mb-2">
					{c.title}
				</h1>
				<p className="text-sm text-white/30 mb-12">{c.updated}</p>

				<div className="space-y-10">
					{c.sections.map((section) => (
						<section key={section.heading}>
							<h2 className="text-base font-semibold text-white mb-3">
								{section.heading}
							</h2>
							<p className="text-sm text-white/60 leading-relaxed mb-3">
								{section.body}
							</p>
							{'list' in section && section.list && (
								<ul className="list-disc list-inside space-y-1 mb-3">
									{section.list.map((item) => (
										<li key={item} className="text-sm text-white/60">
											{item}
										</li>
									))}
								</ul>
							)}
							{'note' in section && section.note && (
								<p className="text-sm text-secondaryLight/80 leading-relaxed">
									{section.note}
								</p>
							)}
						</section>
					))}
				</div>
			</main>

			<footer className="max-w-[1160px] mx-auto px-6 lg:px-12 py-8 border-t border-white/5">
				<p className="text-xs text-white/20">
					Roget Concept SRL — BTW BE 1008.928.573
				</p>
			</footer>
		</div>
	);
}
