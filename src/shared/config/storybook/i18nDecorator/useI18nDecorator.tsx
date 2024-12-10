import { Story } from '@storybook/react'
import { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForStoryBook'
import { StoryContext } from '@storybook/addons'

export const useI18nDecorator = (StoryComponent: Story, context: StoryContext) => {
    const { locale } = context.globals

    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [locale])

    return (
        <Suspense fallback={<div />}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    )
}
