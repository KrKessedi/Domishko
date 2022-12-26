import React from 'react'
import { Flex } from '../../pages/WelcomePage/Welcome.styled'
import Book from '../Book/Book'
import MainBook from '../Book/MainBook'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../../pages/WelcomePage/Welcome.styled'
import { useNavigate } from 'react-router-dom'
import { changeGenre } from '../../redux/bookSlice'

const Genre = ({ flexDirection, category }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

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
				<Title
					cursor={'pointer'}
					fontSize={'20px'}
					fontHeight={'24px'}
					onClick={() => {
						navigate('/genre')
						dispatch(changeGenre(category))
					}}
				>
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
					<MainBook book={bookFilter[5]} />
				</Flex>
			</Flex>
		</>
	)
}

export default Genre
