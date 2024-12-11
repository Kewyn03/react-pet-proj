import { render } from 'react-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App>
                        <AppRouter />
                    </App>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
