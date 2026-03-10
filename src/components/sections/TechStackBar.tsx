import { FaReact, FaJava, FaPhp } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const techIcons = [
	{ icon: <FaReact />, title: 'React' },
	{ icon: <SiTypescript />, title: 'TypeScript' },
	{ icon: <FaJava />, title: 'Java' },
	{ icon: <FaPhp />, title: 'PHP' },
];

export default function TechStackBar() {
	return (
		<section className="py-14 bg-primaryDark relative overflow-hidden">
			<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12">
				<div className="flex justify-center gap-16 text-5xl text-white/15">
					{techIcons.map((tech) => (
						<span
							key={tech.title}
							className="hover:text-secondaryLight transition-colors duration-300"
							title={tech.title}
						>
							{tech.icon}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
