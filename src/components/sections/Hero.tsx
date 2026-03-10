import Image from 'next/image';
import BrandBackground from '@/components/ui/BrandBackground';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { techStack } from '@/data/site-data';

const roles = ['Developer', 'Tech Lead', 'Architect', 'Teacher', 'Writer'];

export default function Hero() {
	return (
		<section className="relative min-h-screen bg-gradient-to-br from-primaryDark via-primary to-[#2a2a88] flex items-center overflow-hidden">
			<BrandBackground showMark />
			<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Content */}
					<div>
						<p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-secondaryLight mb-7">
							<span className="w-7 h-0.5 bg-secondaryLight" />
							Available for new missions
						</p>
						<p className="text-white/70 text-lg lg:text-xl mb-1">
							Hello, I&apos;m
						</p>
						<h1 className="text-5xl lg:text-[88px] font-black text-white leading-[0.95] tracking-tight mb-5">
							Fran
							<span className="bg-gradient-to-r from-secondary to-secondaryLight bg-clip-text text-transparent">
								&ccedil;ois
							</span>
						</h1>

						<div className="flex flex-wrap gap-2 mb-8">
							{roles.map((role) => (
								<span
									key={role}
									className="text-xs font-semibold tracking-wider border border-secondaryLight/35 text-secondaryLight rounded-full px-3.5 py-1 bg-secondaryLight/[0.06]"
								>
									{role}
								</span>
							))}
						</div>

						<p className="text-base text-white/60 leading-relaxed max-w-lg mb-2">
							A senior frontend developer, architect, and technical mentor
							with{' '}
							<strong className="text-white/85 font-semibold">
								20+ years of experience
							</strong>
							. I help teams deliver robust, maintainable, and scalable web
							applications.
						</p>
						<p className="text-sm text-white/40 leading-relaxed max-w-lg mb-10">
							Pragmatic, no-nonsense solutions that move your projects
							forward.
						</p>

						<div className="flex flex-wrap items-center gap-5 mb-12">
							<a
								href="#contact"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondaryLight text-white font-bold text-sm rounded-md px-8 py-3.5 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all tracking-[0.04em]"
							>
								Let&apos;s work together
								<ArrowIcon />
							</a>
							<a
								href="#services"
								className="inline-flex items-center gap-2 border border-white/20 text-white/75 font-semibold text-sm rounded-md px-7 py-3.5 hover:border-secondaryLight hover:text-white transition-all"
							>
								Discover my services
							</a>
						</div>

						<div className="flex items-center gap-2.5 flex-wrap">
							<span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mr-1">
								Stack
							</span>
							{techStack.map((tech) => (
								<span
									key={tech.name}
									className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/[0.06] border border-white/10 text-xs font-bold text-white/60 hover:bg-secondaryLight/10 hover:border-secondaryLight/30 hover:text-secondaryLight transition-all"
								>
									<span
										className={`w-1.5 h-1.5 rounded-full ${tech.color}`}
									/>
									{tech.name}
								</span>
							))}
						</div>
					</div>

					{/* Right: Photo with decorations */}
					<div className="relative hidden lg:flex justify-center items-center">
						<div className="relative w-[420px] h-[520px]">
							<div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary">
								<Image
									src="/fro-pro.JPG"
									alt="Fran&ccedil;ois Roget"
									fill
									className="object-cover object-top"
									priority
								/>
							</div>
							{/* Corner accent */}
							<div className="absolute -top-4 -right-4 w-28 h-28 border-[3px] border-secondaryLight/50 rounded-2xl pointer-events-none" />
							<div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary to-secondaryLight rounded-xl opacity-15 pointer-events-none" />
							{/* Experience badge */}
							<div className="absolute bottom-10 -left-8 bg-white rounded-xl px-5 py-4 shadow-2xl">
								<div className="text-3xl font-black text-primary leading-none">
									20
									<span className="text-secondary">+</span>
								</div>
								<div className="text-[11px] font-medium text-rcGrey mt-0.5">
									Years of experience
								</div>
							</div>
							{/* Availability indicator */}
							<div className="absolute top-7 -right-5 bg-primaryDark/90 border border-secondaryLight/30 rounded-full px-3.5 py-2 flex items-center gap-2 text-xs font-semibold text-secondaryLight backdrop-blur-lg">
								<span className="w-2 h-2 rounded-full bg-secondaryLight shadow-[0_0_0_3px_rgba(0,219,203,0.2)] animate-pulse" />
								Open to missions
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-white/25 animate-[fadeInUp_1s_1.5s_both]">
				<div className="w-[22px] h-9 border-2 border-white/20 rounded-full relative">
					<span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[3px] h-1.5 rounded-full bg-secondaryLight animate-bounce" />
				</div>
				Scroll
			</div>
		</section>
	);
}
