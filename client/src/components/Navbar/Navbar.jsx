import React from 'react'
import avatar from '../../images/Avatar.png'
import { NavbarStyled, Flex, Input, Avatar, Title } from './Navbar.styled'
import logo from '../../images/лого.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeGenre } from '../../redux/bookSlice.js'

const Navbar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	return (
		<NavbarStyled>
			<Flex height={'138px'}>
				<img src={logo} alt='logo' style={{ marginLeft: '70px' }} />
				<Flex width={'922px'}>
					<Input></Input>
					<Avatar src={null || avatar} />
				</Flex>
			</Flex>
			<Flex width={'1200px'} margin={'0 auto'}>
				<Title onClick={() => navigate('/')}>Главная</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('Бестселлеры'))
					}}
				>
					Бестселлеры
				</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('Фантастика'))
					}}
				>
					Фантастика
				</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('Романтика'))
					}}
				>
					Романтика
				</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('История'))
					}}
				>
					История
				</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('Психология'))
					}}
				>
					Психология
				</Title>
				<Title
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre('Бизнес'))
					}}
				>
					Бизнес
				</Title>
			</Flex>
		</NavbarStyled>
	)
}

export default Navbar
