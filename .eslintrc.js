module.exports = {
	plugins: [
		'react',
		'@stylistic/js',
		'@stylistic/ts',
	],
	extends: [
		'next/core-web-vitals',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'no-var': 'error',
		'prefer-const': 'error',
		'no-unused-vars': 'error',
		'sort-imports': 'error',

		'@stylistic/js/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/js/jsx-quotes': ['error', 'prefer-single'],
		'@stylistic/js/arrow-spacing': 'error',
		'@stylistic/js/keyword-spacing': 'error',
		'@stylistic/js/no-multi-spaces': 'error',
		'@stylistic/js/space-in-parens': 'error',
		'@stylistic/js/space-infix-ops': 'error',
		'@stylistic/js/space-unary-ops': 'error',
		'@stylistic/js/semi': ['error', 'never'],
		'@stylistic/js/dot-location': ['error', 'property'],
		'@stylistic/js/max-len': ['error', { code: 100, tabWidth: 2, ignoreStrings: false }],
		'@stylistic/js/computed-property-spacing': ['error', 'never'],
		'@stylistic/js/switch-colon-spacing': 'error',

		'@stylistic/ts/indent': ['error', 'tab'],
		'@stylistic/ts/object-curly-spacing': ['error', 'always'],
		'@stylistic/ts/quote-props': ['error', 'as-needed'],
		'@stylistic/ts/quotes': ['error', 'single'],
		'@stylistic/ts/brace-style': ['error', '1tbs'],
		'@stylistic/ts/key-spacing': 'error',
		'@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/ts/comma-spacing': 'error',
		'@stylistic/ts/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'comma',
				requireLast: true,
			},
			singleline: {
				delimiter: 'comma',
				requireLast: false,
			},
		}],
		'@stylistic/ts/block-spacing': 'error',

		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'never',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],
		'react/jsx-curly-spacing': ['error', {
			when: 'always', children: {
				when: 'always',
			}, objectLiterals: 'never',
		}],
	},
}
