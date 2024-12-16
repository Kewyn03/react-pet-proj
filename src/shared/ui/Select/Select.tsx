import { useTranslation } from 'react-i18next'
import { classNames, TMods } from 'shared/lib/classNames/classNames'

import { ChangeEvent, memo, useMemo } from 'react'
import {
    read
} from '@storybook/components/dist/ts3.9/_modules/@popperjs-core-lib-enums'
import cls from './Select.module.scss'

export interface SelectOption {
    value: string
    content: string
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
    const {
        className,
        options,
        value,
        onChange,
        label,
        readonly
    } = props

    const optionList = useMemo(() => options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
        </option>
    )), [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const mods: TMods = {}
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    )
})
