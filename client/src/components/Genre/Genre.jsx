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

	let books = useSelector(state => state.book.books)
	let bookFilter = books.filter(book => book.categories === category)
	let resultBooks
	if (window.innerWidth > 1812) {
		resultBooks = bookFilter.slice(0, 6)
	} else {
		resultBooks = bookFilter.slice(0, 4)
	}
	console.log(window.innerWidth)
	console.log(resultBooks)
	// const [mQuery, setMQuery] = React.useState({
	// 	matches: window.innerWidth > 880 ? true : false,
	// })

	return (
		<>
			<Flex width={'100%'} bottom={'20px'} style={{ marginTop: '40px' }}>
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
				<Flex wrap={'wrap'} style={{ padding: '0  20px', width: '70%' }}>
					{resultBooks.map(book => (
						<Book key={book._id} book={book} />
					))}
				</Flex>
				<Flex width={'45%'}>
					<MainBook book={bookFilter[6]} />
				</Flex>
			</Flex>
		</>
	)
}

export default Genre
