
const path = require('path');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles/')],
		additionalData: `@use "common.scss" as *;`,
	},
	experimental: {
		esmExternals: false,
	},
	
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = nextConfig;
