import axios, { AxiosStatic } from 'axios'
import { User } from 'entities/User'
import { ActionCreator, AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import {
    loginByUsername
} from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue
}>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>

    getState: () => StateSchema

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    api: jest.MockedFunctionDeep<AxiosStatic>

    navigate: jest.MockedFn<any>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate
            }
        )
        return result
    }
}