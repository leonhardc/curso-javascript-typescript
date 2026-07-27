const path = require('path'); // commomJS

module.exports = {
    mode: 'development',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/, 
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceType: 'unambiguous',
                        presets: [[
                            '@babel/preset-env',
                            { modules: 'commonjs' }
                        ]]
                    }
                }
            },
        ]
    },
    devtool: 'source-map',
}