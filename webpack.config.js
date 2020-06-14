const path = require( 'path' );
const webpack = require( 'webpack' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const isProduction = process.env.NODE_ENV === 'production';

/* Plugins */

// Compile block frontend and editor scss files into css files.
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const extractStyles = new ExtractTextPlugin( './style.css' );
const extractEditorStyles = new ExtractTextPlugin( './editor.css' );

// Remove LiveReloadPlugin if in development mode
const defaultPlugins = defaultConfig.plugins
	.map( ( plugin ) => {
		if ( ! isProduction && plugin.constructor.name.includes( 'LiveReloadPlugin' ) ) {
			return false;
		}
		return plugin;
	} )
	.filter( ( plugin ) => plugin );

const config = {
	...defaultConfig,
	mode: isProduction ? 'production' : 'development',
	devtool: 'source-map',
	entry: {
		index: isProduction ?
			[
				path.resolve( process.cwd(), `src/index.js` )
			] :
			[
				path.resolve( process.cwd(), `./src/index.js` ),
				'webpack-hot-middleware/client?name=index&timeout=20000&reload=true&overlay=true',
			],
		frontend: isProduction ?
			[
				path.resolve( process.cwd(),
				`src/frontend.js` )
			] :
			[
				path.resolve( process.cwd(), `./src/frontend.js` ),
				'webpack-hot-middleware/client?name=frontend&timeout=20000&reload=true&overlay=true',
			],
	},
	output: isProduction ?
		{
			path: path.resolve( process.cwd(), `./build` ),
			filename: '[name].js',
		} :
		{
			publicPath: `/build/`,
			path: path.resolve( process.cwd(), `./build` ),
			filename: '[name].js',
		},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /editor\.(sa|sc|c)ss$/,
				use: extractEditorStyles.extract( {
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false,
							},
						},
					],
				} ),
			},
			{
				test: /style\.(sa|sc|c)ss$/,
				use: extractStyles.extract( {
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: false,
							},
						},
					],
				} ),
			},
		],
	},
	plugins: isProduction ?
		[
			...defaultPlugins,
			extractStyles,
			extractEditorStyles,
		] :
		[
			...defaultPlugins,
			extractStyles,
			extractEditorStyles,
			new webpack.HotModuleReplacementPlugin(),
		]
};

module.exports = config;
