import { useSelector } from 'react-redux'
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly
} from 'entities/Profile'

export const EditableProfileCard = () => {
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)

    return {
        formData,
        isLoading,
        error,
        readonly
    }
}
