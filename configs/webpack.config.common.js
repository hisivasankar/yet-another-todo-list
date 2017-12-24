import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ROOT =  path.resolve(__dirname, '..'),
        SRC_DIR = path.resolve(ROOT, 'src'),
        PUBLIC_DIR = path.resolve(ROOT, 'public'),
        DIST_DIR = path.resolve(ROOT, 'dist'),
        appHtml = path.resolve(PUBLIC_DIR, 'index.html');

export const paths = {
    ROOT,
    SRC_DIR,
    PUBLIC_DIR,
    DIST_DIR,
    appHtml
}

const oConfig = {
    entry: path.resolve(paths.SRC_DIR, 'App.jsx'),
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            inject: 'body',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: paths.DIST_DIR,
        filename: 'bundle.js'
    }
};

export default oConfig;