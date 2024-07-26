import React from 'react';
import Section from '@/Components/Section';

export const ContactButton = () => (
	<a
		href="mailto:francois@roget-concept.be"
		className="text-white bg-primary font-medium text-xl rounded-lg text-sm px-5 py-2.5">
		Contact me
	</a>
);

const Contact: React.FC = () => {
	return (
		<Section title="Lets keep in touch">
			<div className="flex justify-center">
				<ContactButton />
			</div>
		</Section>
	);
};

export default Contact;
