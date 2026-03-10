'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import BrandBackground from '@/components/ui/BrandBackground';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { useTranslation } from '@/i18n/LanguageProvider';

function MailIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function MapPinIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	);
}

export default function ContactCTA() {
	const { t } = useTranslation();

	const contactLinks = [
		{
			icon: <MailIcon />,
			label: 'francois@roget-concept.be',
			href: 'mailto:francois@roget-concept.be',
		},
		{
			icon: <FaLinkedin className="text-lg" />,
			label: 'linkedin.com/in/francoisroget',
			href: 'https://linkedin.com/in/francoisroget',
		},
		{
			icon: <FaGithub className="text-lg" />,
			label: 'github.com/francois-roget',
			href: 'https://github.com/francois-roget',
		},
		{
			icon: <MapPinIcon />,
			label: t.contact.location,
			href: null as string | null,
		},
	];

	return (
		<section
			id="contact"
			className="relative py-28 lg:py-32 bg-gradient-to-br from-primaryDark via-primary to-[#2d2d90] overflow-hidden"
		>
			<BrandBackground />
			<div className="relative max-w-[1160px] mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Text + CTA */}
					<div>
						<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
							<span className="w-7 h-0.5 bg-secondary/50" />
							{t.contact.eyebrow}
						</p>
						<h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
							{t.contact.title}
							<br />
							{t.contact.titleLine2}
						</h2>
						<p className="text-[17px] text-white/45 leading-relaxed max-w-md mb-10">
							{t.contact.description}
						</p>
						<a
							href="mailto:francois@roget-concept.be"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondaryLight text-white font-bold text-sm rounded-md px-10 py-4 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all tracking-[0.04em] uppercase"
						>
							{t.contact.cta}
							<ArrowIcon />
						</a>
					</div>

					{/* Right: Contact links */}
					<div className="bg-white/[0.04] border border-white/10 rounded-2xl px-9 py-10 backdrop-blur-lg">
						<h3 className="text-lg font-extrabold text-white mb-6 tracking-tight">
							{t.contact.cardTitle}
						</h3>
						<div className="flex flex-col gap-4">
							{contactLinks.map((link) => {
								const content = (
									<>
										<div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
											{link.icon}
										</div>
										<span>{link.label}</span>
									</>
								);
								return link.href ? (
									<a
										key={link.label}
										href={link.href}
										target={
											link.href.startsWith('mailto')
												? undefined
												: '_blank'
										}
										rel={
											link.href.startsWith('mailto')
												? undefined
												: 'noopener noreferrer'
										}
										className="flex items-center gap-3 text-sm text-white/55 hover:text-secondaryLight transition-colors"
									>
										{content}
									</a>
								) : (
									<div
										key={link.label}
										className="flex items-center gap-3 text-sm text-white/55"
									>
										{content}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
