const BASE_URL = 'https://www.roget-concept.be'

export const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'ProfilePage',
			'@id': `${BASE_URL}/#webpage`,
			url: `${BASE_URL}/`,
			name: 'Roget Concept — Full Stack Development & Technical Training',
			isPartOf: { '@id': `${BASE_URL}/#website` },
			mainEntity: { '@id': `${BASE_URL}/#person` },
			dateModified: new Date().toISOString().split('T')[0],
			inLanguage: ['en', 'fr'],
		},
		{
			'@type': 'Person',
			'@id': `${BASE_URL}/#person`,
			name: 'François Roget',
			url: `${BASE_URL}/`,
			image: `${BASE_URL}/fro-pro.JPG`,
			jobTitle: 'Senior Full Stack Developer & Architect',
			description:
				'Senior Full Stack Developer and Architect with 20+ years of experience. IT Consultancy, React/TypeScript expertise, and technical training.',
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'BE',
			},
			knowsAbout: [
				'React',
				'TypeScript',
				'JavaScript',
				'Node.js',
				'PHP',
				'Java',
				'Software Architecture',
				'Micro Frontends',
				'Technical Training',
			],
			sameAs: [
				'https://www.linkedin.com/in/francoisroget/',
				'https://github.com/francois-roget',
				'https://francois-roget.medium.com/',
			],
			worksFor: { '@id': `${BASE_URL}/#business` },
		},
		{
			'@type': 'ProfessionalService',
			'@id': `${BASE_URL}/#business`,
			name: 'Roget Concept',
			url: `${BASE_URL}/`,
			logo: `${BASE_URL}/roget-concept-logo.svg`,
			image: `${BASE_URL}/fro-pro.JPG`,
			description:
				'IT Consultancy and Technical Training by François Roget — Senior Full Stack Developer and Architect with 20+ years of experience.',
			founder: { '@id': `${BASE_URL}/#person` },
			email: 'francois@roget-concept.be',
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'BE',
			},
			areaServed: 'Worldwide',
			sameAs: [
				'https://www.linkedin.com/in/francoisroget/',
				'https://github.com/francois-roget',
			],
		},
		{
			'@type': 'WebSite',
			'@id': `${BASE_URL}/#website`,
			url: `${BASE_URL}/`,
			name: 'Roget Concept',
			description: 'Full Stack Development & Technical Training by François Roget',
			publisher: { '@id': `${BASE_URL}/#person` },
			inLanguage: ['en', 'fr'],
		},
		{
			'@type': 'ItemList',
			name: 'Articles by François Roget',
			url: `${BASE_URL}/#articles`,
			author: { '@id': `${BASE_URL}/#person` },
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					url: 'https://medium.com/@francois-roget/i-built-an-ios-app-without-knowing-swift-heres-what-actually-happened-7e928c38e712',
					name: "I Built an iOS App Without Knowing Swift — Here's What Actually Happened",
				},
				{
					'@type': 'ListItem',
					position: 2,
					url: 'https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408',
					name: 'My First Open Source Contribution',
				},
				{
					'@type': 'ListItem',
					position: 3,
					url: 'https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2',
					name: 'How to Conditionally Render React UI Based on User Permissions',
				},
				{
					'@type': 'ListItem',
					position: 4,
					url: 'https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087',
					name: 'Accelerate Your Prototypes Development by Using a Monorepo',
				},
				{
					'@type': 'ListItem',
					position: 5,
					url: 'https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775',
					name: 'How to Build a Dynamic Micro-Frontend Architecture in React',
				},
			],
		},
	],
}
