import Image from 'next/image';
import Link from 'next/link';

const content = {
	en: {
		title: 'Terms of Service',
		updated: 'Last updated: April 2026',
		sections: [
			{
				heading: '1. Subject',
				body: 'These general terms and conditions define the terms under which Roget Concept SRL (hereinafter "the Service Provider"), represented by François Roget, agrees to provide IT services to its clients (hereinafter "the Client").',
			},
			{
				heading: '2. Nature of services',
				body: 'The Service Provider performs various IT services, including but not limited to:',
				list: [
					'Software development',
					'Website creation and maintenance',
					'Technical consulting and assistance',
					'IT training',
				],
			},
			{
				heading: '3. Engagement and duration',
				body: 'The Client engages the Service Provider for a predefined duration, to be agreed upon before the start of the service. The applicable daily rate shall also be agreed between the parties prior to the commencement of the assignment.',
			},
			{
				heading: '4. Pricing and payment terms',
				body: 'Services are invoiced based on the daily rate agreed between the Service Provider and the Client. Payments must be made within fifteen (15) calendar days of the invoice date. In the event of late payment, late payment penalties shall apply, calculated on the basis of the applicable statutory interest rate.',
			},
			{
				heading: '5. Copyright and intellectual property',
				body: 'Upon full payment of the services rendered, the Service Provider assigns to the Client all copyright and intellectual property rights relating to the creations produced under the contract. This assignment takes effect from the date of full payment of the corresponding invoices.',
			},
			{
				heading: '6. Confidentiality',
				body: 'The Service Provider undertakes to keep confidential all information communicated by the Client in the course of providing the services, and not to disclose it to third parties without the prior consent of the Client.',
			},
			{
				heading: '7. Liability',
				body: 'The Service Provider undertakes to perform the services in accordance with best practices and applicable standards. Its liability may only be engaged for direct and foreseeable damages resulting from a proven fault on its part in the performance of the services. Under no circumstances shall the Service Provider be held liable for indirect damages, such as loss of data, loss of profit, or business interruption.',
			},
			{
				heading: '8. Termination',
				body: 'In the event of a material breach by either party of its obligations, the other party may terminate the contract by operation of law, after sending a formal notice that has remained without effect for a period of fifteen (15) days.',
			},
			{
				heading: '9. Amendments to terms',
				body: 'The Service Provider reserves the right to amend these general terms and conditions at any time. Amendments shall apply to services ordered after the date on which the updated terms come into effect.',
			},
			{
				heading: '10. Governing law and jurisdiction',
				body: 'These general terms and conditions are governed by Belgian law. In the event of a dispute, the parties undertake to seek an amicable solution before taking legal action. Failing an amicable agreement, the courts of Brussels shall have sole jurisdiction over any disputes arising from the performance or interpretation of the contract.',
			},
		],
	},
	fr: {
		title: 'Conditions Générales de Prestations de Services',
		updated: 'Dernière mise à jour : avril 2026',
		sections: [
			{
				heading: '1. Objet du contrat',
				body: "Les présentes conditions générales ont pour objet de définir les termes et conditions selon lesquels Roget Concept SRL (ci-après « le Prestataire »), représentée par François Roget, s'engage à fournir des prestations de services informatiques à ses clients (ci-après « le Client »).",
			},
			{
				heading: '2. Nature des prestations',
				body: 'Le Prestataire réalise diverses prestations informatiques, incluant mais non limitées à :',
				list: [
					'Développement de logiciels',
					'Création et maintenance de sites web',
					'Conseil et assistance technique',
					'Formation informatique',
				],
			},
			{
				heading: '3. Engagement et durée',
				body: "Le Client engage le Prestataire pour une durée prédéfinie, qui sera convenue avant le début de la prestation. Le taux journalier applicable sera également convenu entre les deux parties avant le commencement de la mission.",
			},
			{
				heading: '4. Tarifs et conditions de paiement',
				body: "Les prestations seront facturées sur la base du taux journalier convenu entre le Prestataire et le Client. Les paiements doivent être effectués dans un délai de quinze (15) jours calendrier suivant la date de facturation. En cas de retard de paiement, des pénalités de retard seront appliquées, calculées sur la base du taux d'intérêt légal en vigueur.",
			},
			{
				heading: '5. Droits d\'auteur et propriété intellectuelle',
				body: "Sous réserve du paiement intégral des prestations réalisées, le Prestataire cède au Client l'ensemble des droits d'auteur et droits de propriété intellectuelle relatifs aux créations réalisées dans le cadre du contrat. Cette cession est effective à compter de la date de paiement intégral des factures correspondantes.",
			},
			{
				heading: '6. Confidentialité',
				body: "Le Prestataire s'engage à conserver confidentielles toutes les informations communiquées par le Client dans le cadre de la réalisation des prestations et à ne pas les divulguer à des tiers sans l'accord préalable du Client.",
			},
			{
				heading: '7. Responsabilité',
				body: "Le Prestataire s'engage à réaliser les prestations conformément aux règles de l'art et aux normes en vigueur. Sa responsabilité ne pourra être engagée que pour les dommages directs et prévisibles résultant d'une faute prouvée de sa part dans l'exécution des prestations. En aucun cas, le Prestataire ne pourra être tenu responsable des dommages indirects, tels que perte de données, perte de profit, ou interruption d'activité.",
			},
			{
				heading: '8. Résiliation',
				body: "En cas de manquement grave de l'une des parties à ses obligations, l'autre partie pourra résilier le contrat de plein droit, après l'envoi d'une mise en demeure restée sans effet pendant un délai de quinze (15) jours.",
			},
			{
				heading: '9. Modifications des conditions générales',
				body: "Le Prestataire se réserve le droit de modifier les présentes conditions générales à tout moment. Les modifications seront applicables aux prestations commandées postérieurement à la date de mise à jour des conditions générales.",
			},
			{
				heading: '10. Loi applicable et juridiction compétente',
				body: "Les présentes conditions générales sont régies par la loi belge. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d'accord amiable, les tribunaux de Bruxelles seront seuls compétents pour connaître des litiges découlant de l'exécution ou de l'interprétation du contrat.",
			},
		],
	},
};

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
	const { locale } = await params;
	const c = content[locale as keyof typeof content] ?? content.en;

	return (
		<div className="min-h-screen bg-[#12122e] text-white">
			<header className="max-w-[1160px] mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
				<Link href={`/${locale}`}>
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={140}
						height={40}
					/>
				</Link>
				<Link
					href={`/${locale}`}
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
								<ul className="list-disc list-inside space-y-1">
									{section.list.map((item) => (
										<li key={item} className="text-sm text-white/60">
											{item}
										</li>
									))}
								</ul>
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
