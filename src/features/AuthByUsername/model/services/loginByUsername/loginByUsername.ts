import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { User, userActions } from 'entities/User'
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', authData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.error(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
