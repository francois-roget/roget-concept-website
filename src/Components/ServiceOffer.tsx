import React from 'react';
import Section from './Section';

const ServiceOffer: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row gap-10">
			<Section title="IT Consultancy" className="flex-1">
				<div className=" text-primaryDark">
					<p className="mb-5 text-secondary font-bold">
						Boost your tech team with expertise that makes the
						difference.
					</p>
					<p className="mb-5">
						With 20+ years of hands-on experience in frontend and
						fullstack development, I help companies design, build
						and scale high-quality web applications.
					</p>
					<p>
						Whether you need a React expert, a solution architect,
						or a seasoned developer who can hit the ground running,
						I bring clarity, velocity, and long-term thinking to
						your projects. Let’s turn your tech challenges into
						business results — together.
					</p>
				</div>
			</Section>
			<Section title="Technical Training" className="flex-1">
				<div className=" text-primaryDark">
					<p className="mb-5 text-secondary font-bold">
						Empower your developers. Accelerate your team.
					</p>
					<p className="mb-5">
						I offer tailored training sessions for modern web
						development with React, TypeScript, Nx, and more. From
						hands-on workshops to advanced architecture courses, my
						trainings are designed to be practical, engaging, and
						immediately applicable in real projects.
					</p>
					<p>
						Whether you’re onboarding juniors or upskilling seniors,
						I help your team grow with confidence and purpose.
					</p>
				</div>
			</Section>
		</div>
	);
};

export default ServiceOffer;
