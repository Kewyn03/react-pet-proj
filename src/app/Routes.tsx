import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {AboutPage} from 'pages/AboutPage'

const RoutesComponent = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{/*<Route path="/" element={<Counter/>}/>*/}
				<Route path="/about" element={<AboutPage/>}/>
			</Routes>
		</Suspense>
	)
}

export default RoutesComponent