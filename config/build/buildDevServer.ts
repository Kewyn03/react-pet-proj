import { BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    // use dotenv here
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}
