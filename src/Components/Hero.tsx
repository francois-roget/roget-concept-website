import React from 'react';
import Image from 'next/image';
import Technologies from '@/Components/Technologies';
import { ContactButton } from '@/Components/Contact';

const Hero = () => {
	return (
		<header className="">
			<div className="container mx-auto grid h-full gap-10 pt-5 w-full grid-cols-1 items-center lg:grid-cols-2">
				<div className="row-start-2 lg:row-auto">
					<p className="text-7xl font-semibold leading-relaxed text-primary text-center">
						Full stack
					</p>
					<p className="pt-2.5 text-center">
						Developer - Tech lead - architect - teacher - writer
					</p>
					<div className="flex justify-center mt-10">
						<ContactButton />
					</div>
					<Technologies />
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
