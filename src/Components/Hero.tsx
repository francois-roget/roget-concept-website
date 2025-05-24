import React from 'react';
import Image from 'next/image';
import Technologies from '@/Components/Technologies';
import { ContactButton } from '@/Components/Contact';

const Hero = () => {
	return (
		<header className="">
			<div className="container mx-auto grid h-full gap-10 pt-5 w-full grid-cols-1 items-center lg:grid-cols-2">
				<div className="row-start-2 lg:row-auto">
					<p className="text-7xl font-semibold leading-relaxed text-white text-center">
						Hello, I’m François
					</p>
					<div className="flex justify-between mt-1 w-full text-secondaryLight text-xl">
						<span>Developer</span>
						<span>Tech Lead</span>
						<span>Architect</span>
						<span>Teacher</span>
						<span>Writer</span>
					</div>
					<p className="mt-16 text-lg">
						A senior frontend developer, architect, and technical
						mentor with 20+ years of experience. I help teams
						deliver robust, maintainable, and scalable web
						applications.
					</p>
					<p className="mt-10">
						I specialize in modern frontend development with React
						and TypeScript, but I also work fullstack, bringing
						solid experience with Java and PHP backends. Whether you
						need hands-on development, architectural support, or
						technical training, I provide pragmatic, no-nonsense
						solutions that move your projects forward.
					</p>
					<Technologies />
					<div className="flex justify-center mt-20">
						<ContactButton />
					</div>
				</div>
				<Image
					width={500}
					height={500}
					alt="team work"
					src="/fro-pro.JPG"
					className="h-[36rem] w-full rounded-xl object-cover"
				/>
			</div>
		</header>
	);
};

export default Hero;
