import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

import 'shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App>
                    <AppRouter />
                </App>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
