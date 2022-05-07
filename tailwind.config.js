module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#4F4F4F',
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
			},
			height: {
				header: '75px',
				withHeader: 'calc(100vh - 75px)',
			},
			maxWidth: {
				quote: '721px',
				author: '672px',
			},
		},
	},
	plugins: [],
}
