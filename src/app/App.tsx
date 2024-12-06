import React, { FC, Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = ({ children }) => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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
