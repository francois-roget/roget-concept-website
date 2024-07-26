import Hero from '@/Components/Hero';
import Header from '@/Components/Header';
import Companies from '@/Components/Companies/Companies';
import Articles from '@/Components/Articles';
import Contact from '@/Components/Contact';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Companies />
			<Articles />
			<Contact />
		</>
	);
}
