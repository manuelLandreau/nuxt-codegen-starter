module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended',
		'prettier',
	],
	ignorePatterns: ['**/*.generated.ts', '**/types.ts'],
	overrides: [],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
		extraFileExtensions: ['.vue'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'vue/multi-word-component-names': 'off'
	},
};
