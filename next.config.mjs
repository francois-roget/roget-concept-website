/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '',
	output: 'export',
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
