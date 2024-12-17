import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve!.modules = [
        paths.src, 'node_modules'
    ]

    config.resolve?.extensions?.push('.ts', '.tsx')

    const validRules: RuleSetRule[] = config!.module!.rules!.filter(
        (rule): rule is RuleSetRule => !!rule && typeof rule === 'object'
    )

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = validRules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            }
        }

        return rule
    })

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    config.module?.rules?.push(buildCssLoader(true))
    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify('')
    }))

    return config
}
