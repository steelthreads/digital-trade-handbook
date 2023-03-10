module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:markdown/recommended',
	],
	rules: {
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'after-used',
				ignoreRestSiblings: true,
				vars: 'all',
			},
		],
		'import/order': [
			'error',
			{
				// Ensure monorepo packages are imported between external dependencies and internal modules
				pathGroups: [
					{ pattern: '@ag.ds-next/**', group: 'external', position: 'after' },
				],
				'newlines-between': 'never',
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],
	},
};
