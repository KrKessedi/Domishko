import React, { useState } from 'react'
import MainRoutes from './MainRoutes'
import styled from 'styled-components'
import './App.css'
import Modal from './components/Modal/Modal'

const Container = styled.div`
	width: 93%;
	margin: 0 auto;
	font-family: 'Inter', sans-serif;
`

function App() {
	const [modal, setModal] = useState(false)
	return (
		<>
			<Container>
				<MainRoutes />
			</Container>
		</>
	)
}

export default App
