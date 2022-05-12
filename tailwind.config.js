module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#4F4F4F',
				footer: '#828282',
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			height: {
				header: '75px',
				withHeader: 'calc(100vh - 211px)',
			},
			maxWidth: {
				quote: '721px',
				author: '672px',
			},
		},
	},
	plugins: [],
}
