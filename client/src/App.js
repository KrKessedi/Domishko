import React from 'react'
import MainRoutes from './MainRoutes'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
	font-family: 'Inter', sans-serif;
`

function App() {
	return (
		<>
			<Container>
				<MainRoutes />
			</Container>
		</>
	)
}

export default App
