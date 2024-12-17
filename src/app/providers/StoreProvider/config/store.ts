import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import {
    createReducerManager
} from 'app/providers/StoreProvider/config/reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions } from 'react-router'
import { StateSchema, ThunkExtraArg } from './StateSchema'

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

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']
