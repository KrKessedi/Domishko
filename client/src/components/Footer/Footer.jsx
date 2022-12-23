import React from 'react'
import { FooterStyled, Text } from './Footer.styled'
import { Flex } from '../Navbar/Navbar.styled'
import Facebook from '../../images/Facebook.svg'
import Instagram from '../../images/Instagram.svg'
import Twitter from '../../images/Twitter.svg'

const Footer = () => {
	return (
		<FooterStyled>
			<Flex>
				<Text>Все права зарезервированы, 2022</Text>
				<Flex width={'370px'}>
					<Flex width={'180px'}>
						<Text>Контакты</Text>
						<Text>Вакансии</Text>
					</Flex>
					<Flex width={'130px'}>
						<img src={Instagram} alt='instagram' />
						<img src={Facebook} alt='facebook' />
						<img src={Twitter} alt='twitter' />
					</Flex>
				</Flex>
			</Flex>
		</FooterStyled>
	)
}

export default Footer
