'use client';

import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslation } from '@/i18n/LanguageProvider';
import { companies } from '@/data/site-data';

export default function Clients() {
	const { t } = useTranslation();

	return (
		<section id="clients" className="py-24 lg:py-28 bg-white">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.clients.eyebrow}
					title={t.clients.title}
					description={t.clients.description}
				/>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rcGrey/12 border border-rcGrey/12 rounded-xl overflow-hidden">
					{companies.map((company) => (
						<div
							key={company.name}
							className="group bg-white flex items-center justify-center px-8 py-9 hover:bg-rcGreyLight transition-colors duration-300"
						>
							<Image
								src={company.logo}
								alt={company.name}
								width={120}
								height={60}
								className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 object-contain max-h-[60px]"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
