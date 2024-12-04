import {render} from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './theme/ThemeProvider'
import RoutesComponent from './Routes'

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