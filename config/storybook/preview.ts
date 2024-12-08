import {
    StyleDecorator
} from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import {
    ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import {
    RouterDecorator
} from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import {
    i18nDecorator
} from 'shared/config/storybook/i18nDecorator/i18nDecorator'

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                {
                    value: 'en',
                    title: 'English'
                },
                {
                    value: 'ru',
                    title: 'Russian'
                }
            ],
            title: 'Locale'
        }
    }
}

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}
// i18nDecorator
export const decorators = [
    ThemeDecorator(Theme.LIGHT), i18nDecorator, StyleDecorator, RouterDecorator
]
