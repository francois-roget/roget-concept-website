import Image from 'next/image';

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Header */}
			<nav className="max-w-7xl mx-auto px-6 py-8">
				<Image
					src="/roget-concept-logo-white.svg"
					alt="Roget Concept"
					width={200}
					height={100}
				/>
			</nav>

			{/* Hero */}
			<section className="max-w-7xl mx-auto px-6 py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div>
						<h1 className="text-6xl font-semibold leading-tight">
							Hello, I&apos;m François
						</h1>
						<div className="flex gap-6 mt-4 text-secondaryLight text-lg">
							<span>Developer</span>
							<span>Tech Lead</span>
							<span>Architect</span>
							<span>Teacher</span>
						</div>
						<p className="mt-12 text-lg text-rcGreyLight leading-relaxed">
							A senior frontend developer, architect, and technical mentor with
							20+ years of experience. I help teams deliver robust, maintainable,
							and scalable web applications.
						</p>
						<a
							href="mailto:francois@roget-concept.be"
							className="inline-block mt-10 bg-secondary hover:bg-secondaryLight text-white font-medium text-lg rounded-lg px-8 py-3 transition-colors"
						>
							Contact me
						</a>
					</div>
					<div className="flex justify-center">
						<Image
							src="/fro-pro.JPG"
							alt="François Roget"
							width={500}
							height={500}
							className="rounded-xl object-cover h-[28rem] w-full"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="max-w-7xl mx-auto px-6 py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-rcGreyLight rounded-xl p-8">
						<h2 className="text-primary text-2xl font-semibold mb-4">
							IT Consultancy
						</h2>
						<p className="text-primaryDark leading-relaxed">
							With 20+ years of hands-on experience in frontend and fullstack
							development, I help companies design, build and scale high-quality
							web applications.
						</p>
					</div>
					<div className="bg-rcGreyLight rounded-xl p-8">
						<h2 className="text-primary text-2xl font-semibold mb-4">
							Technical Training
						</h2>
						<p className="text-primaryDark leading-relaxed">
							Tailored training sessions for modern web development with React,
							TypeScript, Nx, and more. Practical, engaging, and immediately
							applicable.
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="text-center py-12 text-rcGrey">
				<span>Roget Concept &copy; {new Date().getFullYear()}</span>
			</footer>
		</main>
	);
}
