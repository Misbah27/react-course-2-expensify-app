const path = require('path')

module.exports = (env) => {
    const isProduction = env === 'production';
    
    return {
        entry:  './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react'],
                        plugins: ['transform-class-properties', 'transform-object-rest-spread']
                    }
                }
            },{
                test:/\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true
        },
        devtool: 'source-map'
    }
}

