import Image from 'next/image';
import { type Translations } from '@/i18n/locales/en';

const footerSections = [
	'services',
	'expertise',
	'clients',
	'articles',
	'projects',
	'contact',
] as const;

interface Props {
	t: Translations;
	locale: string;
}

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
	return (
		<a
			href={href}
			className="text-xs text-white/20 hover:text-secondaryLight transition-colors"
		>
			{children}
		</a>
	);
}

export default function Footer({ t, locale }: Props) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#12122e]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 py-10 flex items-center justify-between flex-wrap gap-4">
				<Image
					src="/roget-concept-logo-white.svg"
					alt="Roget Concept"
					width={140}
					height={40}
				/>
				<div className="hidden md:flex gap-7">
					{footerSections.map((id) => (
						<a
							key={id}
							href={`#${id}`}
							className="text-xs font-medium text-white/30 tracking-[0.08em] uppercase hover:text-secondaryLight transition-colors"
						>
							{t.nav[id] ?? id}
						</a>
					))}
				</div>
				<span className="text-xs text-white/20">
					&copy; {currentYear} Fran&ccedil;ois Roget — {t.footer.copyright}
				</span>
			</div>
			<div className="border-t border-white/5">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between flex-wrap gap-2">
					<span className="text-xs text-white/20">{t.footer.legal}</span>
					<div className="flex items-center gap-4">
						<FooterLink href={`/${locale}/privacy`}>
							{t.footer.privacyPolicy}
						</FooterLink>
						<FooterLink href={`/${locale}/terms`}>
							{t.footer.termsOfService}
						</FooterLink>
					</div>
				</div>
			</div>
		</footer>
	);
}
