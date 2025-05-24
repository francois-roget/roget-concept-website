import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#262675',
				primaryDark: '#1d1d58',
				secondary: '#00a8b7',
				secondaryLight: '#00dbcb',
				rcGrey: '#77779b',
				rcGreyLight: 'rgb(233,233,241)',
			},
		},
	},
	plugins: [],
};
export default config;
