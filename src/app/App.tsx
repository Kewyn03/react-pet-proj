import React, {FC} from 'react'
import './styles/index.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames'
import {Navbar} from 'widgets/Navbar'


const App: FC = ({children}) => {
	const {theme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			{children}
		</div>
	)
}

export default App