import React from 'react'
import { Flex } from '../../pages/WelcomePage/Welcome.styled'
import Book from '../Book/Book'
import MainBook from '../Book/MainBook'
import { useSelector } from 'react-redux'
import { Title } from '../../pages/WelcomePage/Welcome.styled'

const Genre = ({ flexDirection, category }) => {
	let books = useSelector((state) => state.book.books)
	let bookFilter = books.filter((book) => book.categories === category)
	let resultBooks = bookFilter.slice(0, 4)
	console.log(category)
	return (
		<>
			<Flex width={'100%'} bottom={'20px'}>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					{category}
				</Title>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					Смотреть все
				</Title>
			</Flex>
			<Flex column={flexDirection}>
				<Flex width={'47%'} wrap={'wrap'} height={'360px'}>
					{resultBooks.map((book) => (
						<Book book={book} />
					))}
				</Flex>
				<Flex width={'45%'}>
					<MainBook book={bookFilter[0]} />
				</Flex>
			</Flex>
		</>
	)
}

export default Genre
