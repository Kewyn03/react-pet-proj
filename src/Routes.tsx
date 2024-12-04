import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Counter from './components/Counter'

const RoutesComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<Counter/>}/>
			<Route path="/about" element={<Counter/>}/>
		</Routes>
	)
}

export default RoutesComponent