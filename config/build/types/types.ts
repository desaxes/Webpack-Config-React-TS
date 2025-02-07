export interface BuildPaths {
    entry: string,
    html: string,
    output: string,
    src:string
}

export type BuildMode = 'development' | 'none' | 'production'

export interface BuildOptions {
    port: number,
    paths: BuildPaths,
    mode: BuildMode,
    analyzer?:boolean
}