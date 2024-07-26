/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: './dist',
	images: {
		unoptimized: true,
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
