import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ILangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(({
    className = '',
    short = false
}: ILangSwitcherProps) => {
    const {
        t,
        i18n
    } = useTranslation('translation')

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {short ? t('shortLng') : t('language')}
        </Button>
    )
})
