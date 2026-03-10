import Image from 'next/image';
import {
	FaReact,
	FaJava,
	FaPhp,
	FaLinkedin,
	FaGithub,
	FaCubes,
	FaServer,
	FaShieldAlt,
	FaChalkboardTeacher,
	FaPenFancy,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const articles = [
	{
		title: 'My First Open Source Contribution',
		url: 'https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408',
		image:
			'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*x3l55V89muzuP3oOOSxKuw.jpeg',
		tags: ['Open Source', 'Github'],
	},
	{
		title: 'How to Conditionally Render React UI Based on User Permissions',
		url: 'https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2',
		image:
			'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*uJ7uijA2eurqLs_XxXjO-w.jpeg',
		tags: ['React', 'Permissions'],
	},
	{
		title: 'Accelerate Your Prototypes Development by Using a Monorepo',
		url: 'https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087',
		image:
			'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eJhDX2imHUMrTXYcEeR_Qg.jpeg',
		tags: ['Monorepo', 'Prototyping'],
	},
	{
		title: 'How to Build a Dynamic Micro-Frontend Architecture in React',
		url: 'https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775',
		image:
			'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BseOQyheuz2bqJtLss60tg.png',
		tags: ['React', 'Micro Frontends'],
	},
];

const companies = [
	{ name: 'Eurocontrol', logo: '/logos/Eurocontrol.png' },
	{ name: 'Be.Brussels', logo: '/logos/Be_Brussels.png' },
	{ name: 'APB', logo: '/logos/apb.png' },
	{ name: 'Tunz', logo: '/logos/Tunz.webp' },
	{ name: 'Ingenico', logo: '/logos/Ingenico.png' },
	{ name: 'Worldline', logo: '/logos/Worldline.png' },
	{ name: 'Paynovate', logo: '/logos/Paynovate.png' },
	{ name: 'Keytrade Bank', logo: '/logos/Keytrade.png' },
];

const expertise = [
	{
		icon: <FaReact />,
		name: 'Frontend',
		desc: 'Building pixel-perfect, performant UIs with a component-driven approach and accessibility in mind.',
		tags: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Vite'],
	},
	{
		icon: <FaCubes />,
		name: 'Architecture',
		desc: 'Designing scalable systems — from micro-frontends to monorepos — that stand the test of time.',
		tags: ['Nx', 'Micro Frontends', 'Monorepo', 'Module Federation'],
	},
	{
		icon: <FaServer />,
		name: 'Backend',
		desc: 'Solid fullstack experience with Java and PHP — bridging frontend and backend teams.',
		tags: ['Java', 'Spring', 'PHP', 'REST APIs'],
	},
	{
		icon: <FaShieldAlt />,
		name: 'Quality & Testing',
		desc: 'Test-driven mindset, code review culture, and CI/CD pipelines that ship with confidence.',
		tags: ['Jest', 'Testing Library', 'Cypress', 'CI/CD'],
	},
	{
		icon: <FaChalkboardTeacher />,
		name: 'Mentoring',
		desc: 'Teaching complex concepts simply. From junior onboarding to senior upskilling, knowledge transfer is in my DNA.',
		tags: ['Workshops', 'Code Review', 'Best Practices'],
	},
	{
		icon: <FaPenFancy />,
		name: 'Writing & Sharing',
		desc: 'Author of technical articles on React, architecture and open source. Believer in sharing what I learn.',
		tags: ['Technical Writing', 'Open Source', 'Community'],
	},
];

const techStack = [
	{ name: 'React', color: 'bg-[#61DAFB]' },
	{ name: 'TypeScript', color: 'bg-[#3178C6]' },
	{ name: 'Java', color: 'bg-[#ED8B00]' },
	{ name: 'PHP', color: 'bg-[#777BB4]' },
	{ name: 'Nx', color: 'bg-[#143055]' },
];

/* Branding background: horizontal lines + concentric arcs + R watermark */
function BrandBackground({ showMark = false }: { showMark?: boolean }) {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Soft cyan glow */}
			<div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-secondary/[0.04] rounded-full blur-[120px]" />

			<svg
				className="absolute inset-0 w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				{/* Horizontal parallel lines (left side) */}
				{Array.from({ length: 10 }, (_, i) => (
					<line
						key={`hl-${i}`}
						x1="0"
						y1={`${28 + i * 5}%`}
						x2="50%"
						y2={`${28 + i * 5}%`}
						stroke="#00a8b7"
						strokeWidth="1"
						opacity={0.06 + (i % 3 === 0 ? 0.03 : 0)}
					/>
				))}

				{/* Concentric arcs from right */}
				{Array.from({ length: 7 }, (_, i) => (
					<circle
						key={`arc-${i}`}
						cx="92%"
						cy="65%"
						r={`${10 + i * 7}%`}
						fill="none"
						stroke="#00a8b7"
						strokeWidth="1"
						opacity={0.1 - i * 0.01}
					/>
				))}
			</svg>

			{/* Large R logo mark watermark */}
			{showMark && (
				<svg
					className="absolute -right-10 top-1/2 -translate-y-1/2 w-[500px] h-[420px] opacity-[0.03]"
					viewBox="0 0 109.8806 84.642"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.737,54.8609c0,5.3831,2.1004,10.4463,5.9395,14.2437,3.7835,3.7418,8.7772,5.8005,14.1047,5.8005h.1948l13.4092-.0417c3.7556,1.5857,7.72,3.7418,11.7678,6.4125,1.7665,1.1545,3.547,2.2535,5.3692,3.2689l-30.4906.0974h-.2782c-7.873,0-15.3148-3.0463-20.9344-8.6242C3.1297,70.3843,0,62.8591,0,54.8609c0-16.4277,13.3536-29.7952,29.7812-29.7952h41.7716c-.8346,1.4327-1.3075,3.1019-1.3075,4.8685s.4729,3.4357,1.3075,4.8684H29.7812c-11.0584,0-20.0442,8.9997-20.0442,20.0582Z"
						fill="white"
					/>
					<path
						d="M109.2908,84.5446h-4.271c-11.3227,0-22.4503-2.4899-32.7854-7.2749-1.6553-.765-3.2828-1.5857-4.8963-2.476-1.9336-1.0432-3.8253-2.1838-5.6892-3.4079-5.9396-3.8948-14.0769-8.3599-22.6594-10.4047,1.3076-1.6413,2.0726-3.7278,2.0726-5.9813,0-1.7804-.4729-3.4496-1.3214-4.8963h40.2276c5.5359,0,10.6826-2.1978,14.5217-6.1621,3.8391-3.9782,5.8423-9.2084,5.6477-14.7445-.3892-10.7246-9.6951-19.4322-20.7536-19.4322l-79.3841-.0278V0l79.3841.0278c16.2471,0,29.9204,12.9223,30.4769,28.8214.2919,8.193-2.6707,15.9547-8.3602,21.8525-5.6887,5.8839-13.3396,9.1388-21.5325,9.1388h-18.5003c1.8361,1.0571,3.6722,2.1977,5.5361,3.4218,11.4897,7.5531,24.6206,11.5452,37.9601,11.5452h4.8684l-.542,9.737Z"
						fill="white"
					/>
					<circle cx="31.3252" cy="54.9999" r="9.737" fill="white" />
					<circle cx="79.9822" cy="29.9342" r="9.737" fill="white" />
				</svg>
			)}
		</div>
	);
}

export default function Home() {
	return (
		<>
			{/* ── Navigation ── */}
			<nav className="fixed top-0 w-full z-50 bg-primaryDark/95 backdrop-blur-xl border-b border-white/[0.07]">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={160}
						height={44}
					/>
					<div className="hidden md:flex items-center gap-9">
						{['Services', 'Expertise', 'Clients', 'Articles'].map((item) => (
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

			{/* ── Hero ── */}
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
								{[
									'Developer',
									'Tech Lead',
									'Architect',
									'Teacher',
									'Writer',
								].map((role) => (
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
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
									>
										<path
											d="M1 7h12M7 1l6 6-6 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
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

			{/* ── Services ── */}
			<section id="services" className="py-28 lg:py-32 bg-rcGreyLight">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
					<div className="text-center mb-16">
						<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
							<span className="w-7 h-px bg-secondary/50" />
							What I do
							<span className="w-7 h-px bg-secondary/50" />
						</p>
						<h2 className="text-4xl lg:text-[42px] font-black text-primary tracking-tight">
							Services
						</h2>
						<p className="text-[17px] text-rcGrey mt-3.5 max-w-xl mx-auto leading-relaxed">
							Two core offerings, one obsession: making your team and your code
							better.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{/* IT Consultancy */}
						<div className="relative bg-white rounded-2xl p-10 lg:p-12 border border-rcGrey/15 shadow-[0_4px_24px_rgba(38,38,117,0.1)] hover:shadow-[0_8px_40px_rgba(38,38,117,0.18)] hover:-translate-y-1.5 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondaryLight" />
							<div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 flex items-center justify-center text-secondary text-2xl mb-7">
								<span className="font-mono font-bold text-lg">
									&lt;/&gt;
								</span>
							</div>
							<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">
								01 &middot; Consultancy
							</p>
							<h3 className="text-2xl font-black text-primary tracking-tight mb-1.5">
								IT Consultancy
							</h3>
							<p className="text-[15px] font-semibold italic text-secondary mb-5">
								Boost your tech team with expertise that makes the difference.
							</p>
							<p className="text-[15px] text-[#4a4a6e] leading-relaxed mb-3">
								With 20+ years of hands-on experience in frontend and fullstack
								development, I help companies design, build and scale
								high-quality web applications.
							</p>
							<p className="text-[15px] text-[#4a4a6e] leading-relaxed mb-6">
								Whether you need a React expert, a solution architect, or a
								seasoned developer who can hit the ground running — I bring
								clarity, velocity, and long-term thinking to your projects.
							</p>
							<div className="flex flex-col gap-2.5">
								{[
									'React & TypeScript architecture reviews and hands-on development',
									'Fullstack integration with Java and PHP backends',
									'Technical leadership and code quality improvement',
									'Pragmatic, no-nonsense solutions focused on business results',
								].map((point) => (
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

						{/* Technical Training */}
						<div className="relative bg-white rounded-2xl p-10 lg:p-12 border border-rcGrey/15 shadow-[0_4px_24px_rgba(38,38,117,0.1)] hover:shadow-[0_8px_40px_rgba(38,38,117,0.18)] hover:-translate-y-1.5 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondaryLight" />
							<div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 flex items-center justify-center text-secondary text-2xl mb-7">
								<FaChalkboardTeacher />
							</div>
							<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">
								02 &middot; Training
							</p>
							<h3 className="text-2xl font-black text-primary tracking-tight mb-1.5">
								Technical Training
							</h3>
							<p className="text-[15px] font-semibold italic text-secondary mb-5">
								Empower your developers. Accelerate your team.
							</p>
							<p className="text-[15px] text-[#4a4a6e] leading-relaxed mb-3">
								Tailored training sessions for modern web development with
								React, TypeScript, Nx, and more. From hands-on workshops to
								advanced architecture courses, my trainings are designed to be
								practical, engaging, and immediately applicable.
							</p>
							<p className="text-[15px] text-[#4a4a6e] leading-relaxed mb-6">
								Whether you&apos;re onboarding juniors or upskilling seniors, I
								help your team grow with confidence and purpose.
							</p>
							<div className="flex flex-col gap-2.5">
								{[
									'React, TypeScript and Nx workshops for all levels',
									'Advanced architecture and micro-frontend courses',
									'Hands-on sessions, immediately applicable on real projects',
									'Onboarding programmes for junior and senior developers',
								].map((point) => (
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
					</div>
				</div>
			</section>

			{/* ── Expertise ── */}
			<section id="expertise" className="py-28 lg:py-32 bg-primary relative overflow-hidden">
				{/* Subtle background lines */}
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
					<div className="text-center mb-16">
						<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
							<span className="w-7 h-px bg-secondary/50" />
							Technical profile
							<span className="w-7 h-px bg-secondary/50" />
						</p>
						<h2 className="text-4xl lg:text-[42px] font-black text-white tracking-tight">
							My Expertise
						</h2>
						<p className="text-[17px] text-white/40 mt-3.5 max-w-xl mx-auto leading-relaxed">
							Deep knowledge across the full web stack, with a frontend-first
							mindset.
						</p>
					</div>

					{/* Stats highlight bar */}
					<div className="flex items-center justify-center gap-10 lg:gap-12 flex-wrap bg-gradient-to-r from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 rounded-2xl px-10 py-10 mb-7">
						{[
							{ value: '20+', label: 'Years of experience' },
							{ value: '8+', label: 'Major clients' },
							{ value: '4', label: 'Published articles' },
						].map((stat, i) => (
							<div key={stat.label} className="flex items-center gap-10 lg:gap-12">
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
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Expertise cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{expertise.map((card) => (
							<div
								key={card.name}
								className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-7 py-8 hover:bg-secondaryLight/[0.06] hover:border-secondaryLight/20 transition-all duration-300"
							>
								<div className="text-3xl text-secondary/80 mb-4">
									{card.icon}
								</div>
								<h3 className="text-lg font-extrabold text-white mb-2">
									{card.name}
								</h3>
								<p className="text-[13px] text-white/45 leading-relaxed mb-4">
									{card.desc}
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

			{/* ── Tech Stack Icons ── */}
			<section className="py-14 bg-primaryDark relative overflow-hidden">
				<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12">
					<div className="flex justify-center gap-16 text-5xl text-white/15">
						<FaReact
							className="hover:text-secondaryLight transition-colors duration-300"
							title="React"
						/>
						<SiTypescript
							className="hover:text-secondaryLight transition-colors duration-300"
							title="TypeScript"
						/>
						<FaJava
							className="hover:text-secondaryLight transition-colors duration-300"
							title="Java"
						/>
						<FaPhp
							className="hover:text-secondaryLight transition-colors duration-300"
							title="PHP"
						/>
					</div>
				</div>
			</section>

			{/* ── Clients ── */}
			<section id="clients" className="py-24 lg:py-28 bg-white">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
					<div className="text-center mb-16">
						<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
							<span className="w-7 h-px bg-secondary/50" />
							Trust
							<span className="w-7 h-px bg-secondary/50" />
						</p>
						<h2 className="text-4xl lg:text-[42px] font-black text-primary tracking-tight">
							They trusted me already
						</h2>
						<p className="text-[17px] text-rcGrey mt-3.5 max-w-xl mx-auto leading-relaxed">
							From fintech to aviation — working with organisations that demand
							technical excellence.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rcGrey/12 border border-rcGrey/12 rounded-xl overflow-hidden">
						{companies.map((company) => (
							<div
								key={company.name}
								className="bg-white flex items-center justify-center px-8 py-9 hover:bg-rcGreyLight transition-colors duration-300"
							>
								<Image
									src={company.logo}
									alt={company.name}
									width={120}
									height={60}
									className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain max-h-[60px]"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Articles ── */}
			<section id="articles" className="py-28 lg:py-32 bg-rcGreyLight">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
					<div className="text-center mb-16">
						<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
							<span className="w-7 h-px bg-secondary/50" />
							Knowledge sharing
							<span className="w-7 h-px bg-secondary/50" />
						</p>
						<h2 className="text-4xl lg:text-[42px] font-black text-primary tracking-tight">
							Some articles I wrote
						</h2>
						<p className="text-[17px] text-rcGrey mt-3.5 max-w-xl mx-auto leading-relaxed">
							Practical content on frontend development, architecture, and
							modern engineering practices.
						</p>
					</div>

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
										<svg
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											className="group-hover:translate-x-0.5 transition-transform duration-300"
										>
											<path
												d="M1 7h12M7 1l6 6-6 6"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* ── Contact CTA ── */}
			<section
				id="contact"
				className="relative py-28 lg:py-32 bg-gradient-to-br from-primaryDark via-primary to-[#2d2d90] overflow-hidden"
			>
				<BrandBackground />
				<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left: Text + CTA */}
						<div>
							<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
								<span className="w-7 h-0.5 bg-secondary/50" />
								Let&apos;s talk
							</p>
							<h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
								Start a project
								<br />
								together
							</h2>
							<p className="text-[17px] text-white/45 leading-relaxed max-w-md mb-10">
								Have a challenge? Need a technical lead, an architect, or a
								trainer who can hit the ground running? Let&apos;s find out if
								we&apos;re a good fit.
							</p>
							<a
								href="mailto:francois@roget-concept.be"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondaryLight text-white font-bold text-sm rounded-md px-10 py-4 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all tracking-[0.04em] uppercase"
							>
								Send me a message
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
								>
									<path
										d="M1 7h12M7 1l6 6-6 6"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>

						{/* Right: Contact links */}
						<div className="bg-white/[0.04] border border-white/10 rounded-2xl px-9 py-10 backdrop-blur-lg">
							<h3 className="text-lg font-extrabold text-white mb-6 tracking-tight">
								Get in touch
							</h3>
							<div className="flex flex-col gap-4">
								{[
									{
										icon: (
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<rect
													x="2"
													y="4"
													width="20"
													height="16"
													rx="2"
												/>
												<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
											</svg>
										),
										label: 'francois@roget-concept.be',
										href: 'mailto:francois@roget-concept.be',
									},
									{
										icon: <FaLinkedin className="text-lg" />,
										label: 'linkedin.com/in/francoisroget',
										href: 'https://linkedin.com/in/francoisroget',
									},
									{
										icon: <FaGithub className="text-lg" />,
										label: 'github.com/francois-roget',
										href: 'https://github.com/francois-roget',
									},
									{
										icon: (
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
												<circle cx="12" cy="10" r="3" />
											</svg>
										),
										label: 'Belgium · Available remotely worldwide',
										href: null,
									},
								].map((link) => {
									const content = (
										<>
											<div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
												{link.icon}
											</div>
											<span>{link.label}</span>
										</>
									);
									return link.href ? (
										<a
											key={link.label}
											href={link.href}
											target={
												link.href.startsWith('mailto')
													? undefined
													: '_blank'
											}
											rel={
												link.href.startsWith('mailto')
													? undefined
													: 'noopener noreferrer'
											}
											className="flex items-center gap-3 text-sm text-white/55 hover:text-secondaryLight transition-colors"
										>
											{content}
										</a>
									) : (
										<div
											key={link.label}
											className="flex items-center gap-3 text-sm text-white/55"
										>
											{content}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Footer ── */}
			<footer className="bg-[#12122e] py-10">
				<div className="max-w-[1160px] mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={140}
						height={40}
					/>
					<div className="hidden md:flex gap-7">
						{['Services', 'Expertise', 'Clients', 'Articles', 'Contact'].map(
							(item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className="text-xs font-medium text-white/30 tracking-[0.08em] uppercase hover:text-secondaryLight transition-colors"
								>
									{item}
								</a>
							)
						)}
					</div>
					<span className="text-xs text-white/20">
						&copy; {new Date().getFullYear()} Fran&ccedil;ois Roget — All rights
						reserved
					</span>
				</div>
			</footer>
		</>
	);
}
