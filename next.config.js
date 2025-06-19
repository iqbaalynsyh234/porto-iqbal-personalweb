const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'porto-iqbal-personalweb';

module.exports = withBundleAnalyzer({
	output: "export",
	trailingSlash: true,
	basePath: "/porto-iqbal-personalweb",
	assetPrefix: isProd ? `/${repoName}/` : '',
	images: {
		unoptimized: true, 
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});

		return config;
	},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{
						key: "Content-Type",
						value: "application/gzip",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=3600",
					},
				],
			},
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production' ? {
			exclude: ['error', 'warn'],
		} : false,
	},
});
