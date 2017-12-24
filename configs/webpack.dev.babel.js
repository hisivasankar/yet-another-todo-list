import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ClosureCompilerPlugin from 'closure-webpack-plugin';
import merge from 'webpack-merge';
import CommonConfig, {paths} from './webpack.config.common';

const oDevelopmentConfig = {
    devtool: 'source-map',
    devServer: {
        contentBase: paths.DIST_DIR,
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

export default merge(CommonConfig, oDevelopmentConfig);