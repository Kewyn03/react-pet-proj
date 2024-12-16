import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'entities/Currency'
import { memo, useCallback } from 'react'

interface ICurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Currency.BYN,
        content: Currency.BYN
    },
    {
        value: Currency.USD,
        content: Currency.USD
    }
]

export const CurrencySelect = memo(({
    className = '',
    value,
    onChange,
    readonly
}: ICurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            className={classNames('cls.CurrencySelect', {}, [className])}
            label={t('currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
