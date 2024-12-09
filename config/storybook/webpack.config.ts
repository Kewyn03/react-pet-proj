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
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config
        && config.module
        && Array.isArray(config.module?.rules)
        && config.module.rules.length > 0) {
        const validRules: RuleSetRule[] = config.module.rules.filter(
            (rule): rule is RuleSetRule => !!rule && typeof rule === 'object'
        )

        // eslint-disable-next-line no-param-reassign
        config.module.rules = validRules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /\.svg$/i
                }
            }

            return rule
        })

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
    }
    config.module?.rules?.push(buildCssLoader(true))

    return config
}
