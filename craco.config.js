const webpack = require('webpack')

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                assert: require.resolve('assert/'),
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve('stream-browserify'), // Add this line
                buffer: require.resolve('buffer/') // Add this line

            }
            return webpackConfig
        },
        plugins: [
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'], // Add this line

            }),
        ],
    }
}