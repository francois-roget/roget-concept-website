import React from 'react';
import { FaJava } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaReact, FaPhp } from 'react-icons/fa';

const Technologies: React.FC = () => (
	<div
		className="flex justify-between mt-20 text-5xl text-secondaryLight"
		aria-label="Technologies">
		<FaReact aria-label="React" title="React" />
		<SiTypescript aria-label="TypeScript" title="TypeScript" />
		<FaJava aria-label="Java" title="Java" />
		<FaPhp aria-label="PHP" title="PHP" />
	</div>
);

export default Technologies;
