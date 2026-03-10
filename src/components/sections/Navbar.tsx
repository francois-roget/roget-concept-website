import Image from 'next/image';
import { navLinks } from '@/data/site-data';

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-primaryDark/95 backdrop-blur-xl border-b border-white/[0.07]">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
				<Image
					src="/roget-concept-logo-white.svg"
					alt="Roget Concept"
					width={160}
					height={44}
				/>
				<div className="hidden md:flex items-center gap-9">
					{navLinks.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="text-[13px] font-medium text-white/60 tracking-[0.06em] uppercase pb-0.5 border-b-2 border-transparent hover:text-white hover:border-secondaryLight transition-all"
						>
							{item}
						</a>
					))}
					<a
						href="#contact"
						className="text-[13px] font-bold text-white bg-gradient-to-br from-secondary to-secondaryLight px-6 py-2.5 rounded-md tracking-[0.04em] uppercase hover:opacity-90 hover:-translate-y-px transition-all"
					>
						Contact me
					</a>
				</div>
			</div>
		</nav>
	);
}
