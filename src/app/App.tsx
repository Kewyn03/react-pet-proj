import React, { FC, Suspense, useLayoutEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMounted, userActions } from 'entities/User'

const App: FC = ({ children }) => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    const mounted = useSelector(getUserMounted)

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
                    {mounted && children}
                </div>
            </Suspense>
        </div>
    )
}

export default App
