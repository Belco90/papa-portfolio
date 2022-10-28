const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: colors.teal,
			},
			fontFamily: {
				sans: 'var(--lato-font)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
