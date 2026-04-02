import { getTranslations } from '@/i18n/getTranslations';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Expertise from '@/components/sections/Expertise';
import TechStackBar from '@/components/sections/TechStackBar';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import Articles from '@/components/sections/Articles';
import AppShowcase from '@/components/sections/AppShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';

type Props = {
	params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
	const { locale } = await params;
	const t = getTranslations(locale);

	return (
		<>
			<Navbar />
			<Hero t={t} />
			<Services t={t} />
			<Expertise t={t} />
			<TechStackBar />
			<Clients t={t} />
			<Testimonials t={t} />
			<Articles t={t} />
			<AppShowcase t={t} />
			<ContactCTA t={t} />
			<Footer t={t} locale={locale} />
		</>
	);
}
