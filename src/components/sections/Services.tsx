'use client';

import { FaChalkboardTeacher } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslation } from '@/i18n/LanguageProvider';

interface ServiceCardProps {
	icon: React.ReactNode;
	number: string;
	label: string;
	title: string;
	tagline: string;
	paragraphs: string[];
	points: string[];
}

function ServiceCard({
	icon,
	number,
	label,
	title,
	tagline,
	paragraphs,
	points,
}: ServiceCardProps) {
	return (
		<div className="relative bg-white rounded-2xl p-10 lg:p-12 border border-rcGrey/15 shadow-[0_4px_24px_rgba(38,38,117,0.1)] hover:shadow-[0_8px_40px_rgba(38,38,117,0.18)] hover:-translate-y-1.5 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondaryLight" />
			<div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 flex items-center justify-center text-secondary text-2xl mb-7">
				{icon}
			</div>
			<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">
				{number} &middot; {label}
			</p>
			<h3 className="text-2xl font-black text-primary tracking-tight mb-1.5">
				{title}
			</h3>
			<p className="text-[15px] font-semibold italic text-secondary mb-5">
				{tagline}
			</p>
			{paragraphs.map((text) => (
				<p
					key={text}
					className="text-[15px] text-[#4a4a6e] leading-relaxed mb-3 last:mb-6"
				>
					{text}
				</p>
			))}
			<div className="flex flex-col gap-2.5">
				{points.map((point) => (
					<div
						key={point}
						className="flex items-start gap-2.5 text-sm text-[#4a4a6e] leading-relaxed"
					>
						<span className="w-1.5 h-1.5 rounded-full bg-secondaryLight mt-2 shrink-0" />
						{point}
					</div>
				))}
			</div>
		</div>
	);
}

export default function Services() {
	const { t } = useTranslation();

	return (
		<section id="services" className="py-28 lg:py-32 bg-rcGreyLight">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.services.eyebrow}
					title={t.services.title}
					description={t.services.description}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					<ServiceCard
						icon={
							<span className="font-mono font-bold text-lg">
								&lt;/&gt;
							</span>
						}
						number="01"
						label={t.services.consultancy.label}
						title={t.services.consultancy.title}
						tagline={t.services.consultancy.tagline}
						paragraphs={t.services.consultancy.paragraphs}
						points={t.services.consultancy.points}
					/>
					<ServiceCard
						icon={<FaChalkboardTeacher />}
						number="02"
						label={t.services.training.label}
						title={t.services.training.title}
						tagline={t.services.training.tagline}
						paragraphs={t.services.training.paragraphs}
						points={t.services.training.points}
					/>
				</div>
			</div>
		</section>
	);
}
