/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: './dist',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'miro.medium.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
