import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ClosureCompilerPlugin from 'closure-webpack-plugin';
import merge from 'webpack-merge';
import CommonConfig, {paths} from './webpack.config.common';

const oProductionConfig = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: paths.ROOT
        })
        // ,
        // new ClosureCompilerPlugin({
        //     mode: 'STANDARD'
        // })
    ]
};

export default merge(CommonConfig, oProductionConfig);