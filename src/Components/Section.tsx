import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	title: string;
	className?: string;
};

const Section: React.FC<Props> = ({ title, children, className }) => {
	return (
		<section className={`mt-48 bg-rcGreyLight rounded-lg p-5 ${className}`}>
			<h2 className="text-primary text-2xl mb-5">{title}</h2>
			{children}
		</section>
	);
};

export default Section;
