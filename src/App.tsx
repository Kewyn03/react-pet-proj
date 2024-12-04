import React, {FC} from 'react'
import './styles/index.scss'
import {useTheme} from './theme/useTheme'
import {classNames} from './helpers/classNames'


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