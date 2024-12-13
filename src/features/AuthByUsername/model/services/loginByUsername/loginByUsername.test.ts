import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { loginByUsername } from './loginByUsername'
import { StateSchema } from '../../../../../app/providers/StoreProvider'
import {
    TestAsyncThunk
} from '../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

describe('LoginByUsername', () => {
    test('success auth', async () => {
        const userValue = {
            username: 'admin',
            id: '1'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({
            username: '123',
            password: '123'
        })

        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(3)
        expect(mockedAxios.post)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toBe('fulfilled')
        expect(result.payload)
            .toBe(userValue)
    })

    test('auth with error', async () => {
        const userValue = {
            username: 'admin',
            id: '1'
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({
            username: '123',
            password: '123'
        })
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2)
        expect(mockedAxios.post)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toBe('rejected')
        expect(result.payload)
            .toBe('error')
    })
})
