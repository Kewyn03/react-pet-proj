import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className = '' }: ILangSwitcherProps) => {
    const {
        t,
        i18n
    } = useTranslation()

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t('language')}
        </Button>
    )
}
