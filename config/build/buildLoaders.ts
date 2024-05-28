import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/types'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            'sass-loader'
        ]
    }
    const typescriptLoader = {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }
    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack', options: {
                icon: true
            }
        }],
    }
    return [
        scssLoader, typescriptLoader, assetLoader, svgLoader
    ]
}