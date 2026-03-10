import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Expertise from '@/components/sections/Expertise';
import TechStackBar from '@/components/sections/TechStackBar';
import Clients from '@/components/sections/Clients';
import Articles from '@/components/sections/Articles';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Expertise />
			<TechStackBar />
			<Clients />
			<Articles />
			<ContactCTA />
			<Footer />
		</>
	);
}
