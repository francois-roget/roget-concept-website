import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	title: string;
	className?: string;
};

const Section: React.FC<Props> = ({ title, children, className }) => {
	return (
		<div className={`mt-48 bg-rcGreyLight rounded-lg p-5 ${className}`}>
			<div className="text-primary text-2xl mb-5">{title}</div>
			{children}
		</div>
	);
};

export default Section;
