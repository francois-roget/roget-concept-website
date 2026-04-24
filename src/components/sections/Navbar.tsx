'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation, type Locale } from '@/i18n/LanguageProvider';

const navSections = ['services', 'expertise', 'clients', 'articles', 'projects'] as const;
const languages = ['fr', 'en'] as const;

function LanguageSwitcher({
	onSelect,
	variant = 'desktop',
}: {
	onSelect?: () => void;
	variant?: 'desktop' | 'mobile';
}) {
	const { locale, setLocale } = useTranslation();

	const handleSelect = (lang: Locale) => {
		setLocale(lang);
		onSelect?.();
	};

	const gapClass = variant === 'desktop' ? 'gap-1.5' : 'gap-3';
	const textClass = variant === 'desktop' ? 'text-[13px]' : 'text-[13px]';

	return (
		<div className={`flex items-center ${gapClass} ${textClass} font-medium tracking-[0.04em]`}>
			{languages.map((lang, i) => (
				<span key={lang} className={`flex items-center ${gapClass}`}>
					{i > 0 && <span className="text-white/20">|</span>}
					<button
						onClick={() => handleSelect(lang as Locale)}
						className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors uppercase ${locale === lang ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
					>
						{lang}
					</button>
				</span>
			))}
		</div>
	);
}

export default function Navbar() {
	const { t, locale } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-primaryDark/95 backdrop-blur-xl border-b border-white/[0.07]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
				<Link href={`/${locale}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={160}
						height={44}
					/>
				</Link>

				{/* Desktop navigation */}
				<div className="hidden lg:flex items-center gap-9">
					{navSections.map((id) => (
						<a
							key={id}
							href={`#${id}`}
							className="text-[13px] font-medium text-white/60 tracking-[0.06em] uppercase pb-0.5 border-b-2 border-transparent hover:text-white hover:border-secondaryLight transition-all"
						>
							{t.nav[id]}
						</a>
					))}

					<LanguageSwitcher variant="desktop" />

					<a
						href="#contact"
						className="text-[13px] font-bold text-white bg-gradient-to-br from-secondary to-secondaryLight px-6 py-2.5 rounded-md tracking-[0.04em] uppercase hover:opacity-90 hover:-translate-y-px transition-all"
					>
						{t.nav.contact}
					</a>
				</div>

				{/* Mobile burger button */}
				<button
					onClick={() => setIsMenuOpen((v) => !v)}
					className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] focus:outline-none"
					aria-label="Menu"
				>
					<span
						className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
					/>
					<span
						className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
					/>
					<span
						className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
					/>
				</button>
			</div>

			{/* Mobile menu panel */}
			{isMenuOpen && (
				<div className="lg:hidden bg-primaryDark/98 backdrop-blur-xl border-t border-white/[0.07] px-6 py-6 flex flex-col gap-1">
					{navSections.map((id) => (
						<a
							key={id}
							href={`#${id}`}
							onClick={closeMenu}
							className="text-base font-medium text-white/70 tracking-[0.06em] uppercase py-3 border-b border-white/[0.06] hover:text-secondaryLight transition-colors"
						>
							{t.nav[id]}
						</a>
					))}

					<a
						href="#contact"
						onClick={closeMenu}
						className="mt-4 text-center text-[13px] font-bold text-white bg-gradient-to-br from-secondary to-secondaryLight px-6 py-3 rounded-md tracking-[0.04em] uppercase hover:opacity-90 transition-all"
					>
						{t.nav.contact}
					</a>

					<div className="mt-5 pt-5 border-t border-white/[0.1] flex items-center justify-center">
						<LanguageSwitcher onSelect={closeMenu} variant="mobile" />
					</div>
				</div>
			)}
		</nav>
	);
}
