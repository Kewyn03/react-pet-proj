import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { ReactNode } from 'react'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router'

interface IStoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const {
        children,
        initialState = {},
        asyncReducers
    } = props

    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
