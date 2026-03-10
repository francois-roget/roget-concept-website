'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n/LanguageProvider';

const footerSections = [
	'services',
	'expertise',
	'clients',
	'articles',
	'contact',
] as const;

export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="bg-[#12122e] py-10">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
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
		</footer>
	);
}
