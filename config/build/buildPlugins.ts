import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from 'webpack'
import { BuildOptions } from './types/types'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin(
            { template: options.paths.html })
    ]
    if (isDev) {
    }
    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),
        )
    }
    if (options.analyzer) {
        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }
    return plugins
}