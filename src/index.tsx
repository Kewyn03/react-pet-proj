import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

import 'shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ThemeProvider>
            <App>
                <AppRouter />
            </App>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
