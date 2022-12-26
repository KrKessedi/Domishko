import React from 'react'
import { Flex, Title } from '../WelcomePage/Welcome.styled'
import MainBook from '../../components/Book/MainBook'
import { Container } from '../WelcomePage/WelcomePage'
import { useSelector } from 'react-redux'
import Book from '../../components/Book/Book'

const GenrePage = () => {
	const genre = useSelector((state) => state.book.genre)
	let books = useSelector((state) => state.book.books)
	let bookFilter = books.filter((book) => book.categories === genre)
	console.log(bookFilter)
	let resultBooks = bookFilter.slice(0, 4)
	return (
		<Container>
			<Title fontSize={'30px'} bottom={'30px'}>
				{genre}
			</Title>
			<Flex bottom={'3em'}>
				<MainBook book={bookFilter[0]} />
				<MainBook book={bookFilter[0]} />
			</Flex>
			<Flex width={'100%'} wrap={'wrap'} height={'360px'}>
				{resultBooks.map((book) => (
					<Book book={book} />
				))}
			</Flex>
		</Container>
	)
}

export default GenrePage
