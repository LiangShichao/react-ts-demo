const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

			// CSS handler
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include: /src/
			},

			// Antd style handler
			{
				test: /\.css$/,
				exclude: /src/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
				]
			},

			// Img handler
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							limit: 2048,
							outputPath: './'
						}
					}
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.template.html',
			favicon: './src/lot.ico',
			inject: true,
			title: 'Lot'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};