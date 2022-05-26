module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			purple: '#3f3cbb',
			midnight: '#121063',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			bg: {
				DEFAULT: '#141414',
				700: '#0a0a0a'
			},
			text: {
				DEFAULT: '#FFFFFF'
			},
			primary: {
				DEFAULT: '#b9090b'
			},
			gray: {
				DEFAULT: '#CFCFCF'
			},
			transparent: '#00000000',
			overlay: '#1d1e26c7'
		},
		extend: {
			aspectRatio: {
				'2/3': '2/3'
			}
		}
	},
	plugins: []
};
