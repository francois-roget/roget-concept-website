import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#262675',
				primaryDark: '#1d1d58',
				secondary: '#00a8b7',
				secondaryLight: '#00dbcb',
				rcGrey: '#9292af',
				rcGreyLight: '#e9e9f1',
			},
		},
	},
	plugins: [],
};
export default config;
