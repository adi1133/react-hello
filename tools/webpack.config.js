import path from 'path'


const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');


const config = {

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ]
    },
};

const clientConfig = Object.assign({}, config, {
    entry: "./src/client/client.jsx",
    output: {
        path: path.join(__dirname, '../build/public'),
        filename: DEBUG ? '[name].js?[hash]' : '[name].[hash].js'
    }
});

const serverConfig = Object.assign({}, config, {
    entry: "./src/server.js",
    output: {
        path: './build',
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },

    target: 'node',
    externals: [
        /^\.\/assets$/,
        function filter(context, request, cb) {
            const isExternal =
                request.match(/^[@a-z][a-z\/\.\-0-9]*$/i)
                && !request.match(/^react-routing/)
                && !context.match(/[\\/]react-routing/);
            cb(null, Boolean(isExternal));
        },
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    }
});
export default [clientConfig, serverConfig]