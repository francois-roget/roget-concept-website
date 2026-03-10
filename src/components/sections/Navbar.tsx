'use client';

import Image from 'next/image';
import { useTranslation, type Locale } from '@/i18n/LanguageProvider';

const navSections = ['services', 'expertise', 'clients', 'articles'] as const;

export default function Navbar() {
	const { t, locale, setLocale } = useTranslation();

	return (
		<nav className="fixed top-0 w-full z-50 bg-primaryDark/95 backdrop-blur-xl border-b border-white/[0.07]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
				<Image
					src="/roget-concept-logo-white.svg"
					alt="Roget Concept"
					width={160}
					height={44}
				/>
				<div className="hidden md:flex items-center gap-9">
					{navSections.map((id) => (
						<a
							key={id}
							href={`#${id}`}
							className="text-[13px] font-medium text-white/60 tracking-[0.06em] uppercase pb-0.5 border-b-2 border-transparent hover:text-white hover:border-secondaryLight transition-all"
						>
							{t.nav[id]}
						</a>
					))}

					{/* Language switcher */}
					<div className="flex items-center gap-1.5 text-[13px] font-medium tracking-[0.04em]">
						{(['fr', 'en'] as const).map((lang, i) => (
							<span key={lang} className="flex items-center gap-1.5">
								{i > 0 && (
									<span className="text-white/20">|</span>
								)}
								<button
									onClick={() => setLocale(lang as Locale)}
									className={`transition-colors uppercase ${locale === lang ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
								>
									{lang}
								</button>
							</span>
						))}
					</div>

					<a
						href="#contact"
						className="text-[13px] font-bold text-white bg-gradient-to-br from-secondary to-secondaryLight px-6 py-2.5 rounded-md tracking-[0.04em] uppercase hover:opacity-90 hover:-translate-y-px transition-all"
					>
						{t.nav.contact}
					</a>
				</div>
			</div>
		</nav>
	);
}
