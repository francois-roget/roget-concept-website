import Image from 'next/image';
import Link from 'next/link';
import { type Translations } from '@/i18n/locales/en';
import ArrowIcon from '@/components/ui/ArrowIcon';
import SectionHeader from '@/components/ui/SectionHeader';

interface Props {
	t: Translations;
	locale: string;
}

function PaniersVisual() {
	return (
		<div className="w-full h-full bg-[#c8efc0] flex items-center justify-center">
			<div className="relative w-28 h-28 drop-shadow-2xl">
				<Image
					src="/paniers-icon.webp"
					alt="Paniers app icon"
					fill
					sizes="112px"
					className="object-contain"
				/>
			</div>
		</div>
	);
}

function VoxRoomVisual() {
	return (
		<div className="w-full h-full bg-[#0D1117] flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,160,0.08),transparent_65%)]" />
			<div className="absolute w-[200px] h-[200px] rounded-full border border-[#00E5A0]/[0.07]" />
			<div className="absolute w-[130px] h-[130px] rounded-full border border-[#00E5A0]/[0.10]" />
			<div className="relative z-10 w-24 h-24 drop-shadow-2xl">
				<Image
					src="/voxroom-logo.webp"
					alt="VoxRoom logo"
					fill
					sizes="96px"
					className="object-contain"
				/>
			</div>
		</div>
	);
}

interface ProjectCardProps {
	href: string;
	visual: React.ReactNode;
	badge: string;
	title: string;
	tagline: string;
	cta: string;
}

function ProjectCard({ href, visual, badge, title, tagline, cta }: ProjectCardProps) {
	return (
		<Link
			href={href}
			className="group block rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden hover:bg-white/[0.06] hover:border-secondary/30 transition-all duration-300"
		>
			<div className="h-52 overflow-hidden">{visual}</div>
			<div className="p-6 lg:p-8">
				<span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-secondary border border-secondary/40 px-2.5 py-1 rounded-full mb-4">
					{badge}
				</span>
				<h3 className="text-2xl font-black text-white mb-2">{title}</h3>
				<p className="text-[14px] text-white/50 leading-relaxed mb-6">{tagline}</p>
				<span className="group-hover:text-secondary inline-flex items-center gap-2 text-[13px] font-bold text-white/50 tracking-[0.04em] uppercase transition-colors duration-200">
					{cta}
					<ArrowIcon
						className="group-hover:translate-x-0.5 transition-transform duration-300"
						strokeWidth={1.5}
						size={13}
					/>
				</span>
			</div>
		</Link>
	);
}

export default function SideProjects({ t, locale }: Props) {
	return (
		<section id="projects" className="py-28 lg:py-32 bg-primaryDark overflow-hidden">
			<div className="max-w-[1160px] mx-auto px-6 lg:px-12">
				<SectionHeader
					eyebrow={t.sideProjects.eyebrow}
					title={t.sideProjects.title}
					description={t.sideProjects.description}
					light
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<ProjectCard
						href={`/${locale}/projects/paniers`}
						visual={<PaniersVisual />}
						badge={t.sideProjects.paniersBadge}
						title="Paniers"
						tagline={t.sideProjects.paniersTagline}
						cta={t.sideProjects.discoverPaniers}
					/>
					<ProjectCard
						href={`/${locale}/projects/voxroom`}
						visual={<VoxRoomVisual />}
						badge={t.sideProjects.voxroomBadge}
						title="VoxRoom"
						tagline={t.sideProjects.voxroomTagline}
						cta={t.sideProjects.discoverVoxroom}
					/>
				</div>
			</div>
		</section>
	);
}
