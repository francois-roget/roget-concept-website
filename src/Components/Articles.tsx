import React from 'react';
import Section from '@/Components/Section';
import Image from 'next/image';

type ArticleType = {
	title: string;
	url: string;
	thumbnailUrl: string;
	tags?: string[];
};

const Article: React.FC<ArticleType> = ({ title, url, thumbnailUrl, tags }) => {
	return (
		<a
			className="flex flex-col w-full bg-white border border-rcGrey rounded overflow-hidden shadow-md my-5 text-primary"
			href={url}
			target="_blank">
			<div className="relative w-full h-36">
				<Image
					src={thumbnailUrl}
					alt={title}
					fill
					sizes="100vw"
					className="object-cover"
				/>
			</div>
			<div className="p-4 ">
				<div className="text-base font-semibold text-primary ">
					{title}
				</div>
				<div className=" flex flex-wrap gap-2 mt-5">
					{tags &&
						tags.length > 0 &&
						tags.map((tag) => (
							<span
								key={tag}
								className="text-white bg-secondary rounded-lg px-2 py-1 text-xs">
								{tag}
							</span>
						))}
				</div>
			</div>
		</a>
	);
};

const Articles: React.FC = () => {
	return (
		<Section title="Some articles I wrote">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				<Article
					title="My First Open source contribution"
					url="https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*x3l55V89muzuP3oOOSxKuw.jpeg"
					tags={['Open Source', 'Github']}
				/>
				<Article
					title="How to conditionally render React UI Based on user permissions"
					url="https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*uJ7uijA2eurqLs_XxXjO-w.jpeg"
					tags={['React', 'Permissions', 'Authentication']}
				/>
				<Article
					title="Accelerate your prototypes development by using a monorepo"
					url="https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eJhDX2imHUMrTXYcEeR_Qg.jpeg"
					tags={['Monorepo', 'Prototyping', 'Fast Feedback']}
				/>
				<Article
					title="How to build a dynamic micro-frontend architecture in React"
					url="https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BseOQyheuz2bqJtLss60tg.png"
					tags={['React', 'Micro Frontends', 'Architecture']}
				/>
			</div>
		</Section>
	);
};

export default Articles;
