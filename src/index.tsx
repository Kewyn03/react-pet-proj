import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import { AppRouter } from 'app/providers/router'

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
