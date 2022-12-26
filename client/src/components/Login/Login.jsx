import React, { useState } from 'react'
import {
	Button,
	Container,
	Form,
	Input,
	Label,
	RegisterLink,
	Title,
	Wrapper,
	Image,
} from './Login.styled'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { Link } from 'react-router-dom'
import logo from '../../images/лого.svg'

const Login = () => {
	const [email, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { email, password })
	}

	return (
		<Container>
			<Wrapper>
				<img src={logo} alt='' />
				<Title margin={'2em 0 3em'}>
					Войдите в свой аккаунт, чтобы получить доступ ко всем функциям
				</Title>
				<Form>
					<Label>Email</Label>
					<Input
						bottom={'1.5em'}
						type='text'
						placeholder='Напишите свой email'
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Label>Пароль</Label>
					<Input
						type='password'
						placeholder='Напишите свой пароль'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick}>Login</Button>
				</Form>
				<RegisterLink>
					Если у Вас нет аккаунта? <Link to='/register'>Регистрация</Link>
				</RegisterLink>
			</Wrapper>
			<Image />
		</Container>
	)
}

export default Login
