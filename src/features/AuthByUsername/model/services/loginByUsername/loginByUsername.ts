import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from 'shared/config/axios/api'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { User, userAction } from 'entities/User'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {
    rejectValue: string
}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(`${BASE_URL}/login`, authData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userAction.setAuthDate(response.data))

            return response.data
        } catch (e) {
            console.error(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
