import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import {
    createReducerManager
} from 'app/providers/StoreProvider/config/reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions } from 'react-router'
import { StateSchema } from './StateSchema'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: string, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject = {
        ...asyncReducers,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        }) as any
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
