import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthDate: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthDate: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        }
    }
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
