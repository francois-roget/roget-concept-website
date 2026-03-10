import Image from 'next/image';
import { footerLinks } from '@/data/site-data';

export default function Footer() {
	return (
		<footer className="bg-[#12122e] py-10">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
				<Image
					src="/roget-concept-logo-white.svg"
					alt="Roget Concept"
					width={140}
					height={40}
				/>
				<div className="hidden md:flex gap-7">
					{footerLinks.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="text-xs font-medium text-white/30 tracking-[0.08em] uppercase hover:text-secondaryLight transition-colors"
						>
							{item}
						</a>
					))}
				</div>
				<span className="text-xs text-white/20">
					&copy; {new Date().getFullYear()} Fran&ccedil;ois Roget — All
					rights reserved
				</span>
			</div>
		</footer>
	);
}
