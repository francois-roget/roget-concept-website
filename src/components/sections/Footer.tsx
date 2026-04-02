import Image from 'next/image';
import { type Translations } from '@/i18n/locales/en';

const footerSections = [
	'services',
	'expertise',
	'clients',
	'articles',
	'apps',
	'contact',
] as const;

interface Props {
	t: Translations;
	locale: string;
}

export default function Footer({ t, locale }: Props) {
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
					&copy; {new Date().getFullYear()} Fran&ccedil;ois Roget —{' '}
					{t.footer.copyright}
				</span>
			</div>
			<div className="border-t border-white/5">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between flex-wrap gap-2">
					<span className="text-xs text-white/20">{t.footer.legal}</span>
					<div className="flex items-center gap-4">
						<a
							href={`/${locale}/privacy`}
							className="text-xs text-white/20 hover:text-secondaryLight transition-colors"
						>
							{t.footer.privacyPolicy}
						</a>
						<a
							href={`/${locale}/terms`}
							className="text-xs text-white/20 hover:text-secondaryLight transition-colors"
						>
							{t.footer.termsOfService}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
