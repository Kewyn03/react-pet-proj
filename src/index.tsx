import {render} from 'react-dom'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import {AppRouter} from 'app/providers/router'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App>
				<AppRouter/>
			</App>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)