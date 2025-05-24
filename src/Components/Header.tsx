import Image from 'next/image';

const Header = () => {
	return (
		<div className="z-10 mt-16 mb-16 w-full items-center justify-between font-mono text-sm lg:flex">
			<Image
				src="/roget-concept-logo-white.svg"
				alt="Roget Concept Logo"
				width={500}
				height={250}
			/>
		</div>
	);
};

export default Header;
