'use client';

import { useState, useEffect, useRef } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { type Translations } from '@/i18n/locales/en';
import { testimonials } from '@/data/site-data';

const GAP = 24;
const INTERVAL = 5000;
const TRANSITION_MS = 500;
const DESKTOP_VISIBLE = 3;

// Clone first DESKTOP_VISIBLE items at the end for seamless infinite loop
const extended = [...testimonials, ...testimonials.slice(0, DESKTOP_VISIBLE)];

interface Props {
	t: Translations;
}

export default function Testimonials({ t }: Props) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animated, setAnimated] = useState(true);
	const [slideOffset, setSlideOffset] = useState(0);

	// Compute slide offset (cardWidth + GAP) on mount and resize
	useEffect(() => {
		const compute = () => {
			if (!containerRef.current) return;
			const w = containerRef.current.clientWidth;
			const isDesktop = window.innerWidth >= 1024;
			setSlideOffset(
				isDesktop
					? (w - GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE + GAP
					: w + GAP
			);
		};
		compute();
		const ro = new ResizeObserver(compute);
		if (containerRef.current) ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, []);

	// Auto-advance every INTERVAL ms
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) => prev + 1);
		}, INTERVAL);
		return () => clearInterval(timer);
	}, []);

	// Seamless loop: once the transition into the clone zone ends, jump back instantly
	useEffect(() => {
		if (currentIndex < testimonials.length) return;
		const timeout = setTimeout(() => {
			setAnimated(false);
			setCurrentIndex(currentIndex - testimonials.length);
		}, TRANSITION_MS);
		return () => clearTimeout(timeout);
	}, [currentIndex]);

	// Re-enable transition after the instant jump (double rAF avoids batching)
	useEffect(() => {
		if (animated) return;
		const id = requestAnimationFrame(() =>
			requestAnimationFrame(() => setAnimated(true))
		);
		return () => cancelAnimationFrame(id);
	}, [animated]);

	const cardWidth = slideOffset > 0 ? slideOffset - GAP : 0;
	const activeIndex = currentIndex % testimonials.length;

	return (
		<section className="py-24 lg:py-28 bg-gradient-to-br from-primaryDark via-primary to-[#2a2a88]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.testimonials.eyebrow}
					title={t.testimonials.title}
					description={t.testimonials.description}
					light
				/>

				<div ref={containerRef} className="overflow-hidden">
					<div
						className="flex"
						style={{
							gap: GAP,
							transform: slideOffset > 0 ? `translateX(-${currentIndex * slideOffset}px)` : undefined,
							transition: animated && slideOffset > 0 ? `transform ${TRANSITION_MS}ms ease-in-out` : 'none',
						}}
					>
						{extended.map((item, i) => (
							<figure
								key={`${i}-${item.author}`}
								className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/8 transition-colors duration-300"
								style={cardWidth > 0 ? { width: cardWidth } : undefined}
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

				<div className="flex justify-center gap-2 mt-8">
					{testimonials.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentIndex(i)}
							aria-label={`Go to testimonial ${i + 1}`}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === activeIndex
									? 'w-6 bg-secondaryLight'
									: 'w-1.5 bg-white/30 hover:bg-white/50'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
