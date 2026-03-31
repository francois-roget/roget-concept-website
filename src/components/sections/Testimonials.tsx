'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslation } from '@/i18n/LanguageProvider';
import { testimonials } from '@/data/site-data';

export default function Testimonials() {
	const { t } = useTranslation();

	return (
		<section className="py-24 lg:py-28 bg-gradient-to-br from-primaryDark via-primary to-[#2a2a88]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.testimonials.eyebrow}
					title={t.testimonials.title}
					description={t.testimonials.description}
					light
				/>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{testimonials.map((item) => (
						<figure
							key={item.author}
							className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/8 transition-colors duration-300"
						>
							<span className="text-4xl text-secondaryLight leading-none select-none">&ldquo;</span>
							<blockquote className="text-sm text-white/70 leading-relaxed flex-1">
								{item.quote}
							</blockquote>
							<figcaption className="flex flex-col gap-0.5 pt-4 border-t border-white/10">
								<span className="text-sm font-semibold text-white">{item.author}</span>
								<span className="text-xs text-white/40">{item.title} · {item.company}</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
