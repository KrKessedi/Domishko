import React from 'react'
import { Flex } from '../../pages/WelcomePage/Welcome.styled'
import Book from '../Book/Book'
import MainBook from '../Book/MainBook'

const Genre = ({ flexDirection }) => {
	return (
		<Flex column={flexDirection}>
			<Flex width={'47%'} wrap={'wrap'} height={'360px'}>
				<Book />
				<Book />
				<Book />
				<Book />
			</Flex>
			<Flex width={'45%'}>
				<MainBook />
			</Flex>
		</Flex>
	)
}

export default Genre
