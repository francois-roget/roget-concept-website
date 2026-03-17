'use client';

import Image from 'next/image';
import { HiSparkles, HiUsers, HiDevicePhoneMobile, HiShieldCheck } from 'react-icons/hi2';
import { SiAppstore } from 'react-icons/si';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { useTranslation } from '@/i18n/LanguageProvider';

const APP_STORE_URL = 'https://apps.apple.com/us/app/paniers/id6759610076';
const ARTICLE_URL =
	'https://medium.com/@francois-roget/i-built-an-ios-app-without-knowing-swift-heres-what-actually-happened-7e928c38e712';

const platforms = ['iPhone', 'iPad', 'Mac', 'Apple Watch'];

export default function AppShowcase() {
	const { t } = useTranslation();

	const features = [
		{ icon: <HiSparkles />, label: t.apps.features.ai },
		{ icon: <HiUsers />, label: t.apps.features.sharing },
		{ icon: <HiDevicePhoneMobile />, label: t.apps.features.platforms },
		{ icon: <HiShieldCheck />, label: t.apps.features.privacy },
	];

	return (
		<section id="apps" className="py-28 lg:py-32 bg-primaryDark overflow-hidden">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

					{/* Left: Text content */}
					<div>
						<p className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-5">
							{t.apps.eyebrow}
						</p>
						<h2 className="text-5xl lg:text-[64px] font-black text-white tracking-tight leading-none mb-4">
							{t.apps.title}
						</h2>
						<p className="text-xl font-semibold text-secondaryLight mb-5 leading-snug">
							{t.apps.tagline}
						</p>
						<p className="text-[15px] text-white/60 leading-relaxed mb-9">
							{t.apps.description}
						</p>

						{/* Features */}
						<div className="flex flex-col gap-3.5 mb-8">
							{features.map(({ icon, label }) => (
								<div key={label} className="flex items-start gap-3">
									<span className="text-secondary text-base mt-px shrink-0">
										{icon}
									</span>
									<span className="text-[14px] text-white/70 leading-snug">
										{label}
									</span>
								</div>
							))}
						</div>

						{/* Platforms */}
						<div className="flex flex-wrap items-center gap-3 mb-8">
							{platforms.map((p) => (
								<span
									key={p}
									className="text-[10px] font-semibold text-white/40 border border-white/10 px-2.5 py-1 rounded-full"
								>
									{p}
								</span>
							))}
						</div>

						{/* CTAs */}
						<div className="flex flex-wrap items-center gap-4 mb-4">
							<a
								href={APP_STORE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-br from-secondary to-secondaryLight text-white font-bold text-sm tracking-[0.04em] uppercase hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-lg shadow-secondary/25"
							>
								<SiAppstore className="text-lg" />
								{t.apps.cta}
							</a>
							<a
								href="https://paniers.app"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm tracking-[0.04em] uppercase hover:bg-white/[0.06] hover:border-white/30 transition-all duration-200"
							>
								paniers.app
								<ArrowIcon strokeWidth={1.5} size={13} />
							</a>
						</div>

						{/* Article link */}
						<a
							href={ARTICLE_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-white/40 hover:text-secondary tracking-[0.04em] uppercase transition-colors duration-200"
						>
							{t.apps.ctaSecondary}
							<ArrowIcon
								strokeWidth={1.5}
								className="group-hover:translate-x-0.5 transition-transform duration-300"
							/>
						</a>
					</div>

					{/* Right: iPhone mockup */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative">
							{/* Glow */}
							<div className="absolute -inset-12 bg-gradient-to-br from-secondary/12 to-[#4ade80]/8 rounded-[4rem] blur-3xl pointer-events-none" />

							{/* iPhone frame */}
							<div className="relative w-[300px] rounded-[3.5rem] bg-gray-900 border-[12px] border-gray-800 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
								{/* Dynamic Island */}
								<div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-gray-900 rounded-full z-10" />

								{/* Screen */}
								<div className="bg-[#c8efc0] flex items-center justify-center" style={{ aspectRatio: '9/19.5' }}>
									<div className="relative w-[80%] aspect-square mt-6">
										<Image
											src="/paniers-icon.png"
											alt="Paniers app icon"
											fill
											className="object-contain drop-shadow-xl"
										/>
									</div>
								</div>

								{/* Home indicator */}
								<div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[80px] h-[5px] bg-gray-600 rounded-full" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}
