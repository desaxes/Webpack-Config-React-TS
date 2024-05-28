import webpack from "webpack"
import { buildWebpack } from "./config/build/buildWebpack"
import { BuildMode, BuildPaths } from "./config/build/types/types"
import path from "path"
export interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer: boolean
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src:path.resolve(__dirname,'src')
    }
    const config: webpack.Configuration = buildWebpack(
        {
            port: env.port ?? 5000,
            paths: paths,
            mode: env.mode ?? 'development',
            analyzer: env.analyzer ?? false
        })

    return config
}