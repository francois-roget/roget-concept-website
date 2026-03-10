interface ArrowIconProps {
	size?: number;
	strokeWidth?: number;
	className?: string;
}

export default function ArrowIcon({
	size = 14,
	strokeWidth = 2,
	className,
}: ArrowIconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 14 14"
			fill="none"
			className={className}
		>
			<path
				d="M1 7h12M7 1l6 6-6 6"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
