import { FaChalkboardTeacher } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';

interface ServiceCardProps {
	icon: React.ReactNode;
	number: string;
	label: string;
	title: string;
	tagline: string;
	paragraphs: string[];
	points: string[];
}

function ServiceCard({
	icon,
	number,
	label,
	title,
	tagline,
	paragraphs,
	points,
}: ServiceCardProps) {
	return (
		<div className="relative bg-white rounded-2xl p-10 lg:p-12 border border-rcGrey/15 shadow-[0_4px_24px_rgba(38,38,117,0.1)] hover:shadow-[0_8px_40px_rgba(38,38,117,0.18)] hover:-translate-y-1.5 hover:border-secondary/30 transition-all duration-300 overflow-hidden">
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondaryLight" />
			<div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-secondary/10 to-secondaryLight/10 border border-secondaryLight/20 flex items-center justify-center text-secondary text-2xl mb-7">
				{icon}
			</div>
			<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-2">
				{number} &middot; {label}
			</p>
			<h3 className="text-2xl font-black text-primary tracking-tight mb-1.5">
				{title}
			</h3>
			<p className="text-[15px] font-semibold italic text-secondary mb-5">
				{tagline}
			</p>
			{paragraphs.map((text) => (
				<p
					key={text}
					className="text-[15px] text-[#4a4a6e] leading-relaxed mb-3 last:mb-6"
				>
					{text}
				</p>
			))}
			<div className="flex flex-col gap-2.5">
				{points.map((point) => (
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
	);
}

export default function Services() {
	return (
		<section id="services" className="py-28 lg:py-32 bg-rcGreyLight">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow="What I do"
					title="Services"
					description="Two core offerings, one obsession: making your team and your code better."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					<ServiceCard
						icon={
							<span className="font-mono font-bold text-lg">
								&lt;/&gt;
							</span>
						}
						number="01"
						label="Consultancy"
						title="IT Consultancy"
						tagline="Boost your tech team with expertise that makes the difference."
						paragraphs={[
							'With 20+ years of hands-on experience in frontend and fullstack development, I help companies design, build and scale high-quality web applications.',
							'Whether you need a React expert, a solution architect, or a seasoned developer who can hit the ground running — I bring clarity, velocity, and long-term thinking to your projects.',
						]}
						points={[
							'React & TypeScript architecture reviews and hands-on development',
							'Fullstack integration with Java and PHP backends',
							'Technical leadership and code quality improvement',
							'Pragmatic, no-nonsense solutions focused on business results',
						]}
					/>
					<ServiceCard
						icon={<FaChalkboardTeacher />}
						number="02"
						label="Training"
						title="Technical Training"
						tagline="Empower your developers. Accelerate your team."
						paragraphs={[
							'Tailored training sessions for modern web development with React, TypeScript, Nx, and more. From hands-on workshops to advanced architecture courses, my trainings are designed to be practical, engaging, and immediately applicable.',
							"Whether you're onboarding juniors or upskilling seniors, I help your team grow with confidence and purpose.",
						]}
						points={[
							'React, TypeScript and Nx workshops for all levels',
							'Advanced architecture and micro-frontend courses',
							'Hands-on sessions, immediately applicable on real projects',
							'Onboarding programmes for junior and senior developers',
						]}
					/>
				</div>
			</div>
		</section>
	);
}
