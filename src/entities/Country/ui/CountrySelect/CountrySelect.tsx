import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { Country } from '../../model/types/country'

interface ICountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.USA,
        content: Country.USA
    },
    {
        value: Country.Belarus,
        content: Country.Belarus
    }
]

export const CountrySelect = memo(({
    className = '',
    value,
    onChange,
    readonly
}: ICountrySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            className={classNames('cls.CountrySelect', {}, [className])}
            label={t('country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
