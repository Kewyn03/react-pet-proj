import { ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface IDynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager
    useEffect(() => {
        Object.entries(reducers as ReducersList)
            .forEach(([name, reducer]) => {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            })

        return () => {
            if (removeAfterUnmount) {
                // @ts-ignore
                Object.entries(reducers as ReducersList)
                    .forEach(([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey)
                        dispatch({ type: `@UNMOUNT ${name} reducer` })
                    })
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])
    return (
        <>
            {children}
        </>
    )
}
