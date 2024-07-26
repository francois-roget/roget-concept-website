import React from 'react';
import Section from '@/Components/Section';
import Image, { StaticImageData } from 'next/image';
import EurocontrolLogo from './logos/Eurocontrol.png';
import BeBrusselsLogo from './logos/Be_Brussels.jpg';
import ApbLogo from './logos/apb.jpg';
import TunzLogo from './logos/Tunz.webp';
import IngnicoLogo from './logos/Ingenico.png';
import WorldlineLogo from './logos/Worldline.png';
import PaynovateLogo from './logos/Paynovate.jpeg';

type CompanyType = {
	name: string;
	image: StaticImageData;
};

const Company: React.FC<CompanyType> = ({ name, image }) => (
	<div className="flex flex-col justify-center">
		<Image src={image} alt={name} width={150} height={150} />
	</div>
);

const Companies: React.FC = () => {
	return (
		<Section title="I already worked with them">
			<div className="flex justify-between">
				<Company name="Eurocontrol" image={EurocontrolLogo} />
				<Company name="Be.Brussels" image={BeBrusselsLogo} />
				<Company name="APB" image={ApbLogo} />
				<Company name="Tunz" image={TunzLogo} />
				<Company name="Ingenico" image={IngnicoLogo} />
				<Company name="Worldline" image={WorldlineLogo} />
				<Company name="Paynovate" image={PaynovateLogo} />
			</div>
		</Section>
	);
};

export default Companies;
