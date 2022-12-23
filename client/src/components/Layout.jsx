import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	border: 1px solid #e8d3b9;
	border-radius: 45px;
	background-color: #fffdfa;
	padding: 57px 75px;
`

const Layout = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</>
	)
}

export default Layout
