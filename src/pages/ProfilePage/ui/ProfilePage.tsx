import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader, ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
    profile: profileReducer
}

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className = '' }: IProfilePageProps) => {
    const { t } = useTranslation()
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('profile-page')}
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
