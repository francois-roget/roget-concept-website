import Image from 'next/image';
import Link from 'next/link';
import { HiBolt, HiUsers, HiPresentationChartBar, HiSquares2X2 } from 'react-icons/hi2';
import { getTranslations } from '@/i18n/getTranslations';
import ArrowIcon from '@/components/ui/ArrowIcon';

const VOXROOM_URL = 'https://voxroom.roget-concept.be';

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function VoxroomPage({ params }: Props) {
	const { locale } = await params;
	const t = getTranslations(locale);

	const features = [
		{ icon: <HiBolt />, label: t.voxroom.features.live },
		{ icon: <HiUsers />, label: t.voxroom.features.noReg },
		{ icon: <HiPresentationChartBar />, label: t.voxroom.features.results },
		{ icon: <HiSquares2X2 />, label: t.voxroom.features.dashboard },
	];

	return (
		<div className="min-h-screen bg-primaryDark text-white">
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
					href={`/${locale}#projects`}
					className="text-sm text-white/40 hover:text-white transition-colors"
				>
					← {locale === 'fr' ? 'Retour aux projets' : 'Back to projects'}
				</Link>
			</header>

			<main className="max-w-[1160px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
					{/* Left: content */}
					<div>
						<p className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-5">
							{t.voxroom.eyebrow}
						</p>
						<h1 className="text-5xl lg:text-[64px] font-black text-white tracking-tight leading-none mb-4">
							{t.voxroom.title}
						</h1>
						<p className="text-xl font-semibold text-secondaryLight mb-5 leading-snug">
							{t.voxroom.tagline}
						</p>
						<p className="text-[15px] text-white/60 leading-relaxed mb-9">
							{t.voxroom.description}
						</p>

						<div className="flex flex-wrap items-center gap-4">
							<a
								href={VOXROOM_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-br from-secondary to-secondaryLight text-white font-bold text-sm tracking-[0.04em] uppercase hover:opacity-90 hover:-translate-y-px transition-all duration-200 shadow-lg shadow-secondary/25"
							>
								{t.voxroom.cta}
								<ArrowIcon strokeWidth={1.5} size={13} />
							</a>
							<span className="text-[13px] text-white/30 font-medium">
								{t.voxroom.free}
							</span>
						</div>
					</div>

					{/* Right: features */}
					<div className="flex flex-col gap-4">
						{features.map(({ icon, label }) => (
							<div
								key={label}
								className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.08]"
							>
								<span className="text-secondary text-xl mt-0.5 shrink-0">{icon}</span>
								<p className="text-[14px] text-white/70 leading-snug">{label}</p>
							</div>
						))}
					</div>
				</div>
			</main>

			<footer className="max-w-[1160px] mx-auto px-6 lg:px-12 py-8 border-t border-white/5 mt-16">
				<p className="text-xs text-white/20">Roget Concept SRL — BTW BE 1008.928.573</p>
			</footer>
		</div>
	);
}
