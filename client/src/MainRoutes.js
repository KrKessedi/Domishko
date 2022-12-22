import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Layout from './components/Layout'
import ReadPage from './pages/ReadPage/ReadPage'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<WelcomePage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Route>
			<Route path='read' element={<ReadPage />} />
		</Routes>
	)
}

export default MainRoutes
