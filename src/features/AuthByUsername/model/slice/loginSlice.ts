import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from 'features/AuthByUsername'
import {
    loginByUsername
} from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginAction } = loginSlice
export const { reducer: loginReducer } = loginSlice
