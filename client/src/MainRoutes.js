import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Layout from './components/Layout'
import ReadPage from './pages/ReadPage/ReadPage'
import Chart from './components/Chart/Chart'
import StaticBook from './components/StaticBook/StaticBook'
import StaticUsers from './components/StaticUsers/StaticUsers'
import CreateBook from './components/CreateBook/CreateBook'
import { Admin } from './pages'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<WelcomePage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route
					path='admin'
					element={
						<Admin>
							<Chart />
						</Admin>
					}
				/>
				<Route
					path='admin/book'
					element={
						<Admin>
							<StaticBook />
						</Admin>
					}
				/>
				<Route
					path='admin/users'
					element={
						<Admin>
							<StaticUsers />
						</Admin>
					}
				/>
				<Route
					path='admin/createBook'
					element={
						<Admin>
							<CreateBook />
						</Admin>
					}
				/>
			</Route>
			<Route path='read' element={<ReadPage />} />
		</Routes>
	)
}

export default MainRoutes
