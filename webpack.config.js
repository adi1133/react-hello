module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{
				test: /\.jsx$/, // Match both .js and .jsx files
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
};
