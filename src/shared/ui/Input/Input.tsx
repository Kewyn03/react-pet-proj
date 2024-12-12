import { classNames } from 'shared/lib/classNames/classNames'

import React, { InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: IInputProps) => {
    const {
        className = '',
        value,
        onChange,
        placeholder = 'type something',
        type = 'text',
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className={cls.input}
                {...otherProps}
            />
        </div>
    )
})