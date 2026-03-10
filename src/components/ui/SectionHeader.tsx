interface SectionHeaderProps {
	eyebrow: string;
	title: string;
	description?: string;
	light?: boolean;
}

export default function SectionHeader({
	eyebrow,
	title,
	description,
	light = false,
}: SectionHeaderProps) {
	return (
		<div className="text-center mb-16">
			<p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-3.5">
				<span className="w-7 h-px bg-secondary/50" />
				{eyebrow}
				<span className="w-7 h-px bg-secondary/50" />
			</p>
			<h2
				className={`text-4xl lg:text-[42px] font-black tracking-tight ${light ? 'text-white' : 'text-primary'}`}
			>
				{title}
			</h2>
			{description && (
				<p
					className={`text-[17px] mt-3.5 max-w-xl mx-auto leading-relaxed ${light ? 'text-white/40' : 'text-rcGrey'}`}
				>
					{description}
				</p>
			)}
		</div>
	);
}
