import React, {FC} from 'react'
import './styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames'


const App: FC = ({children}) => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			{children}
		</div>
	)
}

export default App