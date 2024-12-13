import { DeepPartial } from 'redux'
import { getLoginState } from './getLoginState'
import { StateSchema } from '../../../../../app/providers/StoreProvider'

describe('getLoginState()', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                username: 'Kewyn',
                password: '123'
            }
        }
        expect(getLoginState(state as StateSchema))
            .toEqual({
                isLoading: false,
                username: 'Kewyn',
                password: '123'
            })
    })

    test('should return default when empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginState(state as StateSchema))
            .toEqual({
                isLoading: false,
                username: '',
                password: ''
            })
    })
})
