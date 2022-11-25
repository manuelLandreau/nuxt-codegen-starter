// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { SiteLocale } from './graphql/types';

const locales = Object.values(SiteLocale).map((siteLocale) => ({
	code: siteLocale,
	file: `${siteLocale}.json`,
}));

const runtimeConfig = {
	public: {
		appEnv: process.env.APP_ENV,
		graphqlApiURL: process.env.GRAPHQL_API_URL,
		graphqlApiTOKEN: process.env.GRAPHQL_API_TOKEN,
	},
};

export default defineNuxtConfig({
	typescript: { strict: true },
	build: {
		transpile: ['@urql/vue'],
	},
	css: ['~/assets/css/main.css'],
	// imports: {
	// 	autoImport: false,
	// },
	modules: [
		[
			'@nuxtjs/i18n',
			{
				locales,
				defaultLocale: 'en',
				langDir: 'locales/',
				vueI18n: {
					legacy: false,
					locale: 'en',
				},
			},
		],
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	runtimeConfig,
});
