const isProduction = process.env.NODE_ENV === 'production';

const config = {
	theme: {
		boxShadow: {
			default: 'var( --tw-box-shadow )',
			md: 'var( --tw-box-shadow-md )',
			lg: 'var( --tw-box-shadow-lg )',
			xl: 'var( --tw-box-shadow-xl )',
		},
		opacity: {
			0: '0',
			10: '.1',
			20: '.2',
			30: '.3',
			40: '.4',
			50: '.5',
			60: '.6',
			70: '.7',
			80: '.8',
			90: '.9',
			100: '1',
		},
	},
	variants: {},
	purge: {
		enabled: isProduction ? true : false,
		content: [
			'./src/**/*.js',
			'./node_modules/@blockhandbook/**/*.js'
		],
	},
	plugins: [
		require( 'tailwindcss' ),
		require( 'autoprefixer' )
	],
};

module.exports = config;
