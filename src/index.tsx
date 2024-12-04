import {render} from 'react-dom'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'
import RoutesComponent from './app/Routes'

render(
	<BrowserRouter>
		<ThemeProvider>
			<App>
				<RoutesComponent/>
			</App>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)