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
			speakable: {
				'@type': 'SpeakableSpecification',
				cssSelector: ['#hero-bio', '#service-consultancy', '#service-training'],
			},
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
			alumniOf: {
				'@type': 'EducationalOrganization',
				name: 'ESI Bruxelles',
				url: 'https://www.he2b.be/esi/',
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
			legalName: 'Roget Concept SRL',
			vatID: 'BE1008928573',
			url: `${BASE_URL}/`,
			logo: `${BASE_URL}/roget-concept-logo.svg`,
			image: `${BASE_URL}/fro-pro.JPG`,
			description:
				'IT Consultancy and Technical Training by François Roget — Senior Full Stack Developer and Architect with 20+ years of experience.',
			serviceType: ['IT Consultancy', 'Technical Training', 'Software Architecture'],
			founder: { '@id': `${BASE_URL}/#person` },
			email: 'francois@roget-concept.be',
			address: {
				'@type': 'PostalAddress',
				addressCountry: 'BE',
				addressLocality: 'Belgium',
			},
			areaServed: 'Worldwide',
			sameAs: [
				'https://www.linkedin.com/in/francoisroget/',
				'https://github.com/francois-roget',
			],
			review: [
				{
					'@type': 'Review',
					reviewBody:
						'François is methodical and skilled. His attention to detail in coding best practices, coupled with his commitment to performance and maintainability, makes his work both reliable and future-proof. What sets him apart is his intuitive sense for UI/UX — an invaluable asset that not every frontend developer possesses.',
					author: {
						'@type': 'Person',
						name: 'Gaëtan Denaisse',
						jobTitle: 'DevOps & Testing Coach',
					},
					reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
				},
				{
					'@type': 'Review',
					reviewBody:
						'François knows his stuff: undisputed master of React and Java. He is very professional and, beyond that, a great colleague and an asset to teams. Always ready to support and encourage colleagues in search of new knowledge.',
					author: {
						'@type': 'Person',
						name: 'Emilie Bialais',
						jobTitle: 'React Developer',
					},
					reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
				},
				{
					'@type': 'Review',
					reviewBody:
						'François made my life as Product Manager so much easier. He comes to every meeting with ideas and concrete approaches. He works diligently and always puts UI/UX at the forefront. I would highly recommend François to anybody looking for his skills.',
					author: {
						'@type': 'Person',
						name: 'Zofia Barnes',
						jobTitle: 'Product Manager',
					},
					reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
				},
				{
					'@type': 'Review',
					reviewBody:
						'Working with François was easy. Good listener, smart and fast to understand complex topics. React Guru, he shares his passion and knowledge smoothly.',
					author: {
						'@type': 'Person',
						name: 'Fabrice Clin',
						jobTitle: 'Software Architect / Full-Stack Dev',
					},
					reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
				},
				{
					'@type': 'Review',
					reviewBody:
						'François was my mentor during my internship at Paynovate. His experience and expertise helped me take a significant step forward as a React developer. Beyond his technical skills, François is a great mentor, approachable, and an excellent teacher.',
					author: {
						'@type': 'Person',
						name: 'Mirko Bozzetto',
						jobTitle: 'React & Node Developer',
					},
					reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
				},
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
			'@type': 'SoftwareApplication',
			'@id': `${BASE_URL}/#paniers-app`,
			name: 'Paniers',
			description:
				'Smart, privacy-focused shopping list syncing in real time across all Apple devices. AI categorisation via Apple Intelligence and CoreML. No servers, no ads.',
			url: 'https://paniers.app',
			applicationCategory: 'LifestyleApplication',
			operatingSystem: 'iOS, iPadOS, macOS, watchOS',
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
			downloadUrl: 'https://apps.apple.com/us/app/paniers/id6759610076',
			author: { '@id': `${BASE_URL}/#person` },
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
					author: { '@id': `${BASE_URL}/#person` },
					datePublished: '2026-03-01',
				},
				{
					'@type': 'ListItem',
					position: 2,
					url: 'https://medium.com/@francois-roget/my-first-open-source-contribution-5707aebc0408',
					name: 'My First Open Source Contribution',
					author: { '@id': `${BASE_URL}/#person` },
					datePublished: '2020-08-01',
				},
				{
					'@type': 'ListItem',
					position: 3,
					url: 'https://medium.com/@francois-roget/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2',
					name: 'How to Conditionally Render React UI Based on User Permissions',
					author: { '@id': `${BASE_URL}/#person` },
					datePublished: '2021-05-01',
				},
				{
					'@type': 'ListItem',
					position: 4,
					url: 'https://medium.com/stackademic/accelerate-your-prototypes-development-by-using-a-monorepo-2ecac78e9087',
					name: 'Accelerate Your Prototypes Development by Using a Monorepo',
					author: { '@id': `${BASE_URL}/#person` },
					datePublished: '2023-09-01',
				},
				{
					'@type': 'ListItem',
					position: 5,
					url: 'https://medium.com/@francois-roget/how-to-build-a-dynamic-micro-frontend-architecture-in-react-95ce548cb775',
					name: 'How to Build a Dynamic Micro-Frontend Architecture in React',
					author: { '@id': `${BASE_URL}/#person` },
					datePublished: '2024-02-01',
				},
			],
		},
	],
}
