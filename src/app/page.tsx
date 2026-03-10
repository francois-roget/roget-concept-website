import Image from 'next/image';
import { FaReact, FaJava, FaPhp } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const articles = [
	{
		title: 'My First Open Source Contribution',
		url: 'https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408',
		image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*x3l55V89muzuP3oOOSxKuw.jpeg',
		tags: ['Open Source', 'Github'],
	},
	{
		title: 'How to Conditionally Render React UI Based on User Permissions',
		url: 'https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2',
		image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*uJ7uijA2eurqLs_XxXjO-w.jpeg',
		tags: ['React', 'Permissions'],
	},
	{
		title: 'Accelerate Your Prototypes Development by Using a Monorepo',
		url: 'https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087',
		image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eJhDX2imHUMrTXYcEeR_Qg.jpeg',
		tags: ['Monorepo', 'Prototyping'],
	},
	{
		title: 'How to Build a Dynamic Micro-Frontend Architecture in React',
		url: 'https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775',
		image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BseOQyheuz2bqJtLss60tg.png',
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
				{/* Horizontal parallel lines (left side, like LinkedIn banner) */}
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

				{/* Concentric arcs from right (like LinkedIn banner) */}
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
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-lg border-b border-white/5">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={180}
						height={50}
					/>
					<a
						href="mailto:francois@roget-concept.be"
						className="text-sm bg-gradient-to-r from-secondary to-secondaryLight text-white font-medium rounded-full px-6 py-2.5 hover:shadow-lg hover:shadow-secondary/25 transition-all"
					>
						Contact me
					</a>
				</div>
			</nav>

			{/* Hero */}
			<section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
				<BrandBackground showMark />
				<div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<p className="text-secondary text-sm font-medium tracking-widest uppercase mb-6">
								Driven by Technology
							</p>
							<h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
								Hello, I&apos;m{' '}
								<span className="bg-gradient-to-r from-secondary to-secondaryLight bg-clip-text text-transparent">
									François
								</span>
							</h1>
							<div className="flex flex-wrap gap-3 mt-8">
								{[
									'Developer',
									'Tech Lead',
									'Architect',
									'Teacher',
									'Writer',
								].map((role) => (
									<span
										key={role}
										className="text-sm border border-secondary/30 text-secondaryLight rounded-full px-4 py-1.5"
									>
										{role}
									</span>
								))}
							</div>
							<p className="mt-10 text-lg text-white/80 leading-relaxed">
								A senior frontend developer, architect, and technical mentor
								with 20+ years of experience. I help teams deliver robust,
								maintainable, and scalable web applications.
							</p>
							<p className="mt-4 text-white/50 leading-relaxed">
								I specialize in modern frontend development with React and
								TypeScript, but I also work fullstack, bringing solid experience
								with Java and PHP backends.
							</p>
							<div className="flex gap-4 mt-10">
								<a
									href="mailto:francois@roget-concept.be"
									className="bg-gradient-to-r from-secondary to-secondaryLight text-white font-semibold rounded-full px-8 py-3 hover:shadow-lg hover:shadow-secondary/25 transition-all"
								>
									Get in touch
								</a>
								<a
									href="#services"
									className="border border-white/20 text-white font-medium rounded-full px-8 py-3 hover:bg-white/5 transition-all"
								>
									My services
								</a>
							</div>
						</div>
						<div className="relative flex justify-center">
							<div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-secondaryLight/10 rounded-3xl blur-3xl" />
							<Image
								src="/fro-pro.JPG"
								alt="François Roget"
								width={500}
								height={600}
								className="relative rounded-3xl object-cover h-[32rem] w-full shadow-2xl ring-1 ring-white/10"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section id="services" className="py-32 bg-rcGreyLight">
				<div className="max-w-7xl mx-auto px-6">
					<p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
						What I offer
					</p>
					<h2 className="text-4xl font-bold text-primary mb-16">Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
							<div className="w-12 h-1 bg-gradient-to-r from-secondary to-secondaryLight rounded-full mb-8 group-hover:w-20 transition-all duration-300" />
							<h3 className="text-2xl font-bold text-primary mb-4">
								IT Consultancy
							</h3>
							<p className="text-secondary font-semibold mb-4">
								Boost your tech team with expertise that makes the difference.
							</p>
							<p className="text-rcGrey leading-relaxed">
								With 20+ years of hands-on experience, I help companies design,
								build and scale high-quality web applications. Whether you need a
								React expert, a solution architect, or a seasoned developer, I
								bring clarity, velocity, and long-term thinking to your projects.
							</p>
						</div>
						<div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
							<div className="w-12 h-1 bg-gradient-to-r from-secondary to-secondaryLight rounded-full mb-8 group-hover:w-20 transition-all duration-300" />
							<h3 className="text-2xl font-bold text-primary mb-4">
								Technical Training
							</h3>
							<p className="text-secondary font-semibold mb-4">
								Empower your developers. Accelerate your team.
							</p>
							<p className="text-rcGrey leading-relaxed">
								Tailored training sessions for React, TypeScript, Nx, and more.
								From hands-on workshops to advanced architecture courses,
								designed to be practical, engaging, and immediately applicable in
								real projects.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className="py-16 bg-primary relative overflow-hidden">
				{/* Subtle horizontal lines */}
				<svg
					className="absolute inset-0 w-full h-full pointer-events-none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					{Array.from({ length: 5 }, (_, i) => (
						<line
							key={`tech-hl-${i}`}
							x1="0"
							y1={`${15 + i * 18}%`}
							x2="100%"
							y2={`${15 + i * 18}%`}
							stroke="#00a8b7"
							strokeWidth="1"
							opacity="0.06"
						/>
					))}
				</svg>
				<div className="relative max-w-7xl mx-auto px-6">
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

			{/* Clients */}
			<section className="py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 text-center">
						They trusted me
					</p>
					<h2 className="text-4xl font-bold text-primary mb-16 text-center">
						Clients
					</h2>
					<div className="flex flex-wrap justify-center items-center gap-12">
						{companies.map((company) => (
							<div
								key={company.name}
								className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
							>
								<Image
									src={company.logo}
									alt={company.name}
									width={120}
									height={80}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Articles */}
			<section className="py-32 bg-rcGreyLight">
				<div className="max-w-7xl mx-auto px-6">
					<p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
						Insights
					</p>
					<h2 className="text-4xl font-bold text-primary mb-16">Articles</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{articles.map((article) => (
							<a
								key={article.title}
								href={article.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
							>
								<div className="relative h-44 overflow-hidden">
									<Image
										src={article.image}
										alt={article.title}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="p-5">
									<h3 className="text-sm font-semibold text-primary leading-snug">
										{article.title}
									</h3>
									<div className="flex flex-wrap gap-1.5 mt-4">
										{article.tags.map((tag) => (
											<span
												key={tag}
												className="text-xs bg-secondary/10 text-secondary rounded-full px-2.5 py-0.5"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative py-32 bg-primary overflow-hidden">
				<BrandBackground />
				<div className="relative max-w-3xl mx-auto px-6 text-center">
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Let&apos;s work together
					</h2>
					<p className="text-xl text-white/50 mb-10">
						Whether you need hands-on development, architectural support, or
						technical training — let&apos;s talk.
					</p>
					<a
						href="mailto:francois@roget-concept.be"
						className="inline-block bg-gradient-to-r from-secondary to-secondaryLight text-white font-semibold text-lg rounded-full px-10 py-4 hover:shadow-lg hover:shadow-secondary/25 transition-all"
					>
						Get in touch
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-primaryDark py-8">
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
					<Image
						src="/roget-concept-logo-white.svg"
						alt="Roget Concept"
						width={140}
						height={40}
					/>
					<span className="text-rcGrey text-sm">
						Roget Concept &copy; {new Date().getFullYear()}
					</span>
				</div>
			</footer>
		</>
	);
}
