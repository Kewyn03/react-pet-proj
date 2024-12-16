import { classNames, TMods } from 'shared/lib/classNames/classNames'

import React, { InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    readonly?: boolean
}

export const Input = memo((props: IInputProps) => {
    const {
        className = '',
        value,
        onChange,
        placeholder = 'type something',
        type = 'text',
        readonly = false,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: TMods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className={cls.input}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )
})
