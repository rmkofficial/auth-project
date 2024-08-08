const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            assert: require.resolve('assert/'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url/')
        }
    };

    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG || 'false'),
            'process.env.NODE_OPTIONS': JSON.stringify(process.env.NODE_OPTIONS || '--openssl-legacy-provider')
        })
    ];

    return config;
};
