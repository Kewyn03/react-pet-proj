import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        // use dotenv here
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}
