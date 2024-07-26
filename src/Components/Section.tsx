import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
	title: string;
};

const Section: React.FC<Props> = ({ title, children }) => {
	return (
		<div className="mt-48">
			<div className="text-primary text-2xl my-20">{title}</div>
			{children}
		</div>
	);
};

export default Section;
