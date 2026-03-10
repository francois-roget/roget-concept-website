'use client';

import {
	FaReact,
	FaCubes,
	FaServer,
	FaShieldAlt,
	FaChalkboardTeacher,
	FaPenFancy,
} from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslation } from '@/i18n/LanguageProvider';

const expertiseCards = [
	{
		key: 'frontend' as const,
		icon: <FaReact />,
		tags: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Vite'],
	},
	{
		key: 'architecture' as const,
		icon: <FaCubes />,
		tags: ['Nx', 'Micro Frontends', 'Monorepo', 'Module Federation'],
	},
	{
		key: 'backend' as const,
		icon: <FaServer />,
		tags: ['Java', 'Spring', 'PHP', 'REST APIs'],
	},
	{
		key: 'quality' as const,
		icon: <FaShieldAlt />,
		tags: ['Jest', 'Testing Library', 'Cypress', 'CI/CD'],
	},
	{
		key: 'mentoring' as const,
		icon: <FaChalkboardTeacher />,
		tags: ['Workshops', 'Code Review', 'Best Practices'],
	},
	{
		key: 'writing' as const,
		icon: <FaPenFancy />,
		tags: ['Technical Writing', 'Open Source', 'Community'],
	},
];

const statsData = [
	{ value: '20+', key: 'years' as const },
	{ value: '8+', key: 'clients' as const },
	{ value: '4', key: 'articles' as const },
];

export default function Expertise() {
	const { t } = useTranslation();

	return (
		<section
			id="expertise"
			className="py-28 lg:py-32 bg-primary relative overflow-hidden"
		>
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				{Array.from({ length: 5 }, (_, i) => (
					<line
						key={`exp-hl-${i}`}
						x1="0"
						y1={`${15 + i * 18}%`}
						x2="100%"
						y2={`${15 + i * 18}%`}
						stroke="#00a8b7"
						strokeWidth="1"
						opacity="0.05"
					/>
				))}
			</svg>
			<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.expertise.eyebrow}
					title={t.expertise.title}
					description={t.expertise.description}
					light
				/>

				{/* Stats highlight bar */}
				<div className="flex items-center justify-center gap-10 lg:gap-12 flex-wrap bg-gradient-to-r from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 rounded-2xl px-10 py-10 mb-7">
					{statsData.map((stat, i) => (
						<div
							key={stat.key}
							className="flex items-center gap-10 lg:gap-12"
						>
							{i > 0 && (
								<div className="w-px h-16 bg-white/10 hidden sm:block" />
							)}
							<div className="text-center">
								<div className="text-5xl font-black text-white leading-none">
									{stat.value.replace('+', '')}
									{stat.value.includes('+') && (
										<span className="text-secondaryLight">+</span>
									)}
								</div>
								<div className="text-[13px] text-white/45 mt-1.5 tracking-[0.05em]">
									{t.expertise.stats[stat.key]}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Expertise cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{expertiseCards.map((card) => (
						<div
							key={card.key}
							className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-7 py-8 hover:bg-secondaryLight/[0.06] hover:border-secondaryLight/20 transition-all duration-300"
						>
							<div className="text-3xl text-secondary/80 mb-4">
								{card.icon}
							</div>
							<h3 className="text-lg font-extrabold text-white mb-2">
								{t.expertise.cards[card.key].name}
							</h3>
							<p className="text-[13px] text-white/45 leading-relaxed mb-4">
								{t.expertise.cards[card.key].desc}
							</p>
							<div className="flex flex-wrap gap-1.5">
								{card.tags.map((tag) => (
									<span
										key={tag}
										className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-secondaryLight/[0.08] border border-secondaryLight/15 text-secondaryLight"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
