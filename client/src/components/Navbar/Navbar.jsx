import React from 'react'
import {
	NavbarStyled,
	Flex,
	Input,
	Avatar,
	Title,
	NavWrapper,
} from './Navbar.styled'
import logo from '../../images/лого.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import { RiAdminLine } from 'react-icons/ri'
import { CgInbox } from 'react-icons/cg'
import { Logout } from '../../redux/apiCalls'
import { changeGenre } from '../../redux/bookSlice'

const Navbar = () => {
	const location = useLocation()
	const block = location.pathname.split('/')[1]
	const user = useSelector(state => state.user.currentUser)
	const hel = [
		'asdfasdfasdfas;dfsadfkajsdlfjasldfjalsdkjflsdjfasdlkfja;sdlkfja;slkdjfa;lskdjf;laskdjf;lasdkjf;aslkdjf;aslkdjf;alskdjf;laskjdf;laskjdf;laksjdf;lksajfl;sjadfl;sajdflsajf;ljkjkjkjkjkjkjkjkjkjasdkfjsakdjfkasjdkfjkdfjkdjfkdjfkdjfdkjfdkjfdkjfdkjfdkjfdk ',
	]
	const params = user?.email?.split('@')[0]
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		Logout(dispatch)
		navigate('/')
	}

	return (
		<>
			{block === 'admin' ? (
				<NavbarStyled style={{ margin: '0' }}>
					<Flex height={'138px'}>
						<Link style={{ display: 'flex' }} to='/'>
							<img src={logo} alt='logo' style={{ width: '100px' }} />
						</Link>
						<Flex>
							<Input></Input>
							<NavWrapper>
								<AiOutlineLogout onClick={handleClick} />
								{user?.isAdmin && (
									<Link to='/admin' style={{ display: 'flex' }}>
										<RiAdminLine />
									</Link>
								)}
								<Link style={{ display: 'flex' }} to={`/${params}`}>
									{' '}
									{user?.avatar ? (
										<Avatar src={user?.avatar} />
									) : (
										<AiOutlineUser />
									)}
								</Link>
							</NavWrapper>
						</Flex>
					</Flex>
					<Flex style={{ display: 'none' }}></Flex>
				</NavbarStyled>
			) : (
				<NavbarStyled>
					<Flex height={'138px'}>
						<Link style={{ display: 'flex' }} to='/'>
							<img src={logo} alt='logo' style={{ width: '100px' }} />
						</Link>
						<Flex>
							<Input />
							<NavWrapper>
								<AiOutlineLogout onClick={handleClick} />
								<CgInbox />
								{user?.isAdmin && (
									<Link to='/admin' style={{ display: 'flex' }}>
										<RiAdminLine />
									</Link>
								)}
								<Link style={{ display: 'flex' }} to={`/${params}`}>
									{' '}
									{user?.avatar ? (
										<Avatar src={user?.avatar} />
									) : (
										<AiOutlineUser />
									)}
								</Link>
							</NavWrapper>
						</Flex>
					</Flex>
					<Flex style={{ padding: '0 20px' }}>
						<Title className='navbar' onClick={() => navigate('/')}>
							Главная
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('Бестселлеры'))
							}}
						>
							Бестселлеры
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('Фантастика'))
							}}
						>
							Фантастика
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('Романтика'))
							}}
						>
							Романтика
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('История'))
							}}
						>
							История
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('Психология'))
							}}
						>
							Психология
						</Title>
						<Title
							className='navbar'
							onClick={() => {
								navigate('/genre')
								dispatch(changeGenre('Бизнес'))
							}}
						>
							Бизнес
						</Title>
					</Flex>
				</NavbarStyled>
			)}
		</>
	)
}

export default Navbar
