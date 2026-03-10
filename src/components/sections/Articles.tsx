import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { articles } from '@/data/site-data';

export default function Articles() {
	return (
		<section id="articles" className="py-28 lg:py-32 bg-rcGreyLight">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow="Knowledge sharing"
					title="Some articles I wrote"
					description="Practical content on frontend development, architecture, and modern engineering practices."
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{articles.map((article) => (
						<a
							key={article.title}
							href={article.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-xl overflow-hidden bg-white border border-rcGrey/12 shadow-[0_4px_24px_rgba(38,38,117,0.1)] hover:shadow-[0_8px_40px_rgba(38,38,117,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
						>
							<div className="relative h-44 overflow-hidden">
								<Image
									src={article.image}
									alt={article.title}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-primaryDark/40 to-transparent opacity-60" />
							</div>
							<div className="p-6 flex-1 flex flex-col">
								<div className="flex flex-wrap gap-1.5 mb-3.5">
									{article.tags.map((tag) => (
										<span
											key={tag}
											className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-[0.05em] bg-secondary/[0.08] text-secondary border border-secondary/15"
										>
											{tag}
										</span>
									))}
								</div>
								<h3 className="text-[15px] font-extrabold text-primary leading-snug mb-auto">
									{article.title}
								</h3>
								<p className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-bold text-secondary tracking-[0.04em] uppercase">
									Read article
									<ArrowIcon
										strokeWidth={1.5}
										className="group-hover:translate-x-0.5 transition-transform duration-300"
									/>
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
