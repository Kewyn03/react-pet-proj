module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    staticDirs: ['../../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes'
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5'
    }
}
