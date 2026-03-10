export const en = {
	nav: {
		services: 'Services',
		expertise: 'Expertise',
		clients: 'Clients',
		articles: 'Articles',
		contact: 'Contact me',
	},
	hero: {
		eyebrow: 'Available for new missions',
		hello: "Hello, I'm",
		roles: ['Developer', 'Tech Lead', 'Architect', 'Teacher', 'Writer'],
		bio: 'A senior frontend developer, architect, and technical mentor with ',
		bioHighlight: '20+ years of experience',
		bioContinue:
			'. I help teams deliver robust, maintainable, and scalable web applications.',
		bioSub:
			'Pragmatic, no-nonsense solutions that move your projects forward.',
		cta: "Let's work together",
		ctaSecondary: 'Discover my services',
		stack: 'Stack',
		yearsLabel: 'Years of experience',
		availability: 'Open to missions',
	},
	services: {
		eyebrow: 'What I do',
		title: 'Services',
		description:
			'Two core offerings, one obsession: making your team and your code better.',
		consultancy: {
			label: 'Consultancy',
			title: 'IT Consultancy',
			tagline:
				'Boost your tech team with expertise that makes the difference.',
			paragraphs: [
				'With 20+ years of hands-on experience in frontend and fullstack development, I help companies design, build and scale high-quality web applications.',
				'Whether you need a React expert, a solution architect, or a seasoned developer who can hit the ground running — I bring clarity, velocity, and long-term thinking to your projects.',
			],
			points: [
				'React & TypeScript architecture reviews and hands-on development',
				'Fullstack integration with Java and PHP backends',
				'Technical leadership and code quality improvement',
				'Pragmatic, no-nonsense solutions focused on business results',
			],
		},
		training: {
			label: 'Training',
			title: 'Technical Training',
			tagline: 'Empower your developers. Accelerate your team.',
			paragraphs: [
				'Tailored training sessions for modern web development with React, TypeScript, Nx, and more. From hands-on workshops to advanced architecture courses, my trainings are designed to be practical, engaging, and immediately applicable.',
				"Whether you're onboarding juniors or upskilling seniors, I help your team grow with confidence and purpose.",
			],
			points: [
				'React, TypeScript and Nx workshops for all levels',
				'Advanced architecture and micro-frontend courses',
				'Hands-on sessions, immediately applicable on real projects',
				'Onboarding programmes for junior and senior developers',
			],
		},
	},
	expertise: {
		eyebrow: 'Technical profile',
		title: 'My Expertise',
		description:
			'Deep knowledge across the full web stack, with a frontend-first mindset.',
		stats: {
			years: 'Years of experience',
			clients: 'Major clients',
			articles: 'Published articles',
		},
		cards: {
			frontend: {
				name: 'Frontend',
				desc: 'Building pixel-perfect, performant UIs with a component-driven approach and accessibility in mind.',
			},
			architecture: {
				name: 'Architecture',
				desc: 'Designing scalable systems — from micro-frontends to monorepos — that stand the test of time.',
			},
			backend: {
				name: 'Backend',
				desc: 'Solid fullstack experience with Java and PHP — bridging frontend and backend teams.',
			},
			quality: {
				name: 'Quality & Testing',
				desc: 'Test-driven mindset, code review culture, and CI/CD pipelines that ship with confidence.',
			},
			mentoring: {
				name: 'Mentoring',
				desc: 'Teaching complex concepts simply. From junior onboarding to senior upskilling, knowledge transfer is in my DNA.',
			},
			writing: {
				name: 'Writing & Sharing',
				desc: 'Author of technical articles on React, architecture and open source. Believer in sharing what I learn.',
			},
		},
	},
	clients: {
		eyebrow: 'Trust',
		title: 'They trusted me already',
		description:
			'From fintech to aviation — working with organisations that demand technical excellence.',
	},
	articles: {
		eyebrow: 'Knowledge sharing',
		title: 'Some articles I wrote',
		description:
			'Practical content on frontend development, architecture, and modern engineering practices.',
		readMore: 'Read article',
	},
	contact: {
		eyebrow: "Let's talk",
		title: 'Start a project',
		titleLine2: 'together',
		description:
			"Have a challenge? Need a technical lead, an architect, or a trainer who can hit the ground running? Let's find out if we're a good fit.",
		cta: 'Send me a message',
		cardTitle: 'Get in touch',
		location: 'Belgium · Available remotely worldwide',
	},
	footer: {
		copyright: 'All rights reserved',
	},
};

export type Translations = typeof en;
