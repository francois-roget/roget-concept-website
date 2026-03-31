/** @type {import('next').NextConfig} */
const nextConfig = {
	productionBrowserSourceMaps: false,
	images: {
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
