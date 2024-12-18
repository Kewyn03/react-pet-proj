import React, { Suspense, useCallback } from 'react'
import { Route } from 'react-router-dom'
import {
    AppRoutesProps,
    routeConfig
} from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { Routes } from 'react-router'

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                element={route.authOnly
                    ? <RequireAuth>{element}</RequireAuth> : element}
                path={route.path}
            />
        )
    }, [])
    return (
        <Routes>
            {Object.values(routeConfig)
                .map(renderWithWrapper)}
        </Routes>
    )
}
