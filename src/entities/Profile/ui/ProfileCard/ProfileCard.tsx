import { useTranslation } from 'react-i18next'
import { classNames, TMods } from 'shared/lib/classNames/classNames'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from 'entities/Profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency } from 'entities/Currency'
import {
    CurrencySelect
} from 'entities/Currency/model/CurrencySelect/CurrencySelect'
import { Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'
import cls from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean
}

export const ProfileCard = (props: IProfileCardProps) => {
    const { t } = useTranslation('profile')

    const {
        className = '',
        isLoading,
        error,
        data,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly
    } = props

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
            >
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: TMods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar
                                src={data?.avatar}
                                alt={t('avatar')}
                            />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    placeholder={t('name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('surname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    )
}
