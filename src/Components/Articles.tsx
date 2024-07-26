import React from 'react';
import Section from '@/Components/Section';
import Image from 'next/image';

type ArticleType = {
	title: string;
	url: string;
	thumbnailUrl: string;
};

const Article: React.FC<ArticleType> = ({ title, url, thumbnailUrl }) => {
	return (
		<div className="flex align-middle my-5">
			<Image
				src={thumbnailUrl}
				alt={title}
				className="mr-8"
				width={100}
				height={100}
			/>
			<div className="flex flex-col justify-center">
				<a href={url} target="_blank">
					{title}
				</a>
			</div>
		</div>
	);
};

const Articles: React.FC = () => {
	return (
		<Section title="Some articles I wrote">
			<div className="flex flex-col">
				<Article
					title="My First Open source contribution"
					url="https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*x3l55V89muzuP3oOOSxKuw.jpeg"
				/>
				<Article
					title="How to conditionally render React UI Based on user permissions"
					url="https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*uJ7uijA2eurqLs_XxXjO-w.jpeg"
				/>
				<Article
					title="Accelerate your prototypes development by using a monorepo"
					url="https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eJhDX2imHUMrTXYcEeR_Qg.jpeg"
				/>
				<Article
					title="How to build a dynamic micro-frontend architecture in React"
					url="https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775?source=your_stories_page-------------------------------------"
					thumbnailUrl="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BseOQyheuz2bqJtLss60tg.png"
				/>
			</div>
		</Section>
	);
};

export default Articles;
