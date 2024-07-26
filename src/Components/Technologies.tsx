import React from 'react';
import { FaJava } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaReact, FaPhp } from 'react-icons/fa';

const Technologies: React.FC = () => (
	<div className="flex justify-between mt-40 text-5xl text-primary">
		<FaReact />
		<SiTypescript />
		<FaJava />
		<FaPhp />
		<IoLogoJavascript />
	</div>
);

export default Technologies;
