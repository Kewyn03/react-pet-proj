import { classNames } from 'shared/lib/classNames/classNames'
import { memo, ReactNode, useCallback } from 'react'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import CopyIcon from 'shared/assets/icons/copyIcon.svg'
import cls from './Code.module.scss'

interface ICodeProps {
    className?: string;
    text: string
}

export const Code = memo(({
    className = '',
    text
}: ICodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
