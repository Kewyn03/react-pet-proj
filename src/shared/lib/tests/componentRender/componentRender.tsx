import { ReactNode } from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from 'redux'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export interface IrenderWithRouterOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: IrenderWithRouterOptions = {}) {
    const {
        route = '/',
        initialState
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
