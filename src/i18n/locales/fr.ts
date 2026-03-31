import type { Translations } from './en';

export const fr: Translations = {
	nav: {
		services: 'Services',
		expertise: 'Expertise',
		clients: 'Clients',
		articles: 'Articles',
		apps: 'Apps',
		contact: 'Me contacter',
	},
	hero: {
		eyebrow: 'Disponible pour de nouvelles missions',
		hello: 'Bonjour, je suis',
		roles: [
			'Développeur',
			'Tech Lead',
			'Architecte',
			'Formateur',
			'Auteur',
		],
		bio: 'Un développeur freelance senior, architecte et mentor technique avec ',
		bioHighlight: "plus de 20 ans d'expérience",
		bioContinue:
			". J'aide les équipes à livrer des applications web robustes, maintenables et évolutives.",
		bioSub:
			'Des solutions pragmatiques qui font avancer vos projets.',
		cta: 'Travaillons ensemble',
		ctaSecondary: 'Découvrir mes services',
		stack: 'Stack',
		yearsLabel: "Années d'expérience",
		availability: 'Disponible',
	},
	services: {
		eyebrow: 'Ce que je fais',
		title: 'Services',
		description:
			'Deux offres principales, une seule obsession : améliorer votre équipe et votre code.',
		consultancy: {
			label: 'Consultance',
			title: 'Consultance IT',
			tagline:
				'Un expert freelance pour renforcer votre équipe tech avec une expertise qui fait la différence.',
			paragraphs: [
				"Fort de plus de 20 ans d'expérience en développement frontend et fullstack, j'aide les entreprises à concevoir, développer et faire évoluer des applications web de haute qualité.",
				"Que vous ayez besoin d'un expert React, d'un architecte solutions ou d'un développeur senior opérationnel immédiatement — j'apporte clarté, vélocité et vision à long terme à vos projets.",
			],
			points: [
				'Revues d\'architecture React & TypeScript et développement hands-on',
				'Intégration fullstack avec des backends Java et PHP',
				'Leadership technique et amélioration de la qualité du code',
				'Solutions pragmatiques axées sur les résultats business',
			],
		},
		training: {
			label: 'Formation',
			title: 'Formation technique',
			tagline:
				'Faites monter en compétences vos développeurs. Accélérez votre équipe.',
			paragraphs: [
				"Des formations sur mesure pour le développement web moderne avec React, TypeScript, Nx, et plus encore. Des workshops pratiques aux cours d'architecture avancée, mes formations sont conçues pour être pratiques, engageantes et immédiatement applicables.",
				"Que vous intégriez des juniors ou fassiez monter en compétences des seniors, j'aide votre équipe à grandir avec confiance.",
			],
			points: [
				'Workshops React, TypeScript et Nx pour tous les niveaux',
				"Cours avancés d'architecture et de micro-frontends",
				'Sessions pratiques, immédiatement applicables sur de vrais projets',
				"Programmes d'onboarding pour développeurs juniors et seniors",
			],
		},
	},
	expertise: {
		eyebrow: 'Profil technique',
		title: 'Mon expertise',
		description:
			'Des connaissances approfondies sur toute la stack web, avec une approche frontend-first.',
		stats: {
			years: "Années d'expérience",
			clients: 'Clients majeurs',
			articles: 'Articles publiés',
		},
		cards: {
			frontend: {
				name: 'Frontend',
				desc: "Création d'interfaces performantes et pixel-perfect avec une approche composant et l'accessibilité en tête.",
			},
			architecture: {
				name: 'Architecture',
				desc: 'Conception de systèmes évolutifs — des micro-frontends aux monorepos — conçus pour durer.',
			},
			backend: {
				name: 'Backend',
				desc: 'Expérience fullstack solide avec Java et PHP — le lien entre les équipes frontend et backend.',
			},
			quality: {
				name: 'Qualité & Tests',
				desc: 'Mentalité test-driven, culture de code review et pipelines CI/CD qui livrent en confiance.',
			},
			mentoring: {
				name: 'Mentorat',
				desc: "Enseigner des concepts complexes simplement. De l'intégration junior au perfectionnement senior, le transfert de connaissances est dans mon ADN.",
			},
			writing: {
				name: 'Écriture & Partage',
				desc: "Auteur d'articles techniques sur React, l'architecture et l'open source. Convaincu par le partage.",
			},
		},
	},
	clients: {
		eyebrow: 'Confiance',
		title: "Ils m'ont déjà fait confiance",
		description:
			"De la fintech à l'aviation — au service d'organisations qui exigent l'excellence technique.",
	},
	testimonials: {
		eyebrow: 'Recommandations',
		title: 'Ce que disent mes collègues',
		description: "Recommandations LinkedIn de personnes avec lesquelles j'ai travaillé directement.",
	},
	articles: {
		eyebrow: 'Partage de connaissances',
		title: "Quelques articles que j'ai écrits",
		description:
			"Du contenu pratique sur le développement frontend, l'architecture et les pratiques d'ingénierie modernes.",
		readMore: "Lire l'article",
	},
	apps: {
		eyebrow: 'Side Project · iOS',
		title: 'Paniers',
		tagline: 'Faites vos courses en famille, en harmonie',
		description:
			"Développé de A à Z comme projet iOS personnel — sans connaissance préalable de Swift — Paniers est une liste de courses intelligente, respectueuse de la vie privée, synchronisée en temps réel sur tous vos appareils Apple.",
		features: {
			ai: 'Catégorisation intelligente par IA (Apple Intelligence & CoreML)',
			sharing: 'Partage familial en temps réel via un simple lien, sans compte',
			platforms: 'Disponible sur iPhone, iPad, Mac & Apple Watch',
			privacy: 'Aucun serveur, aucune pub — chiffrement iCloud de bout en bout',
		},
		cta: "Télécharger sur l'App Store",
		ctaSecondary: "Lire l'article",
		free: "Gratuit sur l'App Store",
	},
	contact: {
		eyebrow: 'Parlons-en',
		title: 'Démarrons un projet',
		titleLine2: 'ensemble',
		description:
			"Un challenge ? Besoin d'un tech lead, d'un architecte ou d'un formateur opérationnel immédiatement ? Voyons si nous sommes faits pour travailler ensemble.",
		cta: "M'envoyer un message",
		cardTitle: 'Me contacter',
		location: 'Belgique · Disponible en remote dans le monde entier',
	},
	footer: {
		copyright: 'Tous droits réservés',
		legal: 'Roget Concept SRL — BTW BE 1008.928.573',
		privacyPolicy: 'Politique de confidentialité',
	},
};
