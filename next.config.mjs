/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'miro.medium.com',
				pathname: '/**',
			},
		],
	},
};
export default nextConfig;
