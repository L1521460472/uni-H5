const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
	transpileDependencies:['@dcloudio/uni-ui'],
	configureWebpack:{
		plugins: [
		
	        new CompressionWebpackPlugin({
	
	            filename: "[path][base].gz",
	
	            algorithm: "gzip",
	
	            test: /\.js$/,
	
	            threshold: 10240,
	
	            minRatio: 0.8,
	
	            exclude: /node_modules/,
	
	        })
	
	    ]
	}
	
}