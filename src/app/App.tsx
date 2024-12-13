import React, { FC, Suspense, useLayoutEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App: FC = ({ children }) => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (document.body.className === '') {
            document.body.className = theme
        }
    }, [theme])

    useLayoutEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [])}>
            {/* suspense for i18n */}
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    {children}
                </div>
            </Suspense>
        </div>
    )
}

export default App
