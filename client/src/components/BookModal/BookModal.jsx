import React from 'react'
import {
	Author,
	BookIMG,
	Bottom,
	BottomDesc,
	BottomTitle,
	BTN,
	Center,
	CenterItems,
	CenterWrapper,
	Comment,
	Comments,
	CommentsWrapper,
	Container,
	CreateComment,
	DescItems,
	Description,
	DescTOPLeft,
	DescTOPRight,
	Input,
	Left,
	Link,
	Right,
	Title,
	Top,
} from './BookModal.styled'

const BookModal = ({ book }) => {
	return (
		<Container>
			<Top>
				<Left>
					<BookIMG src={book.img} />
					<Link target='_blank' href={book.linkToDown}>
						<BTN>Скачать</BTN>
					</Link>
				</Left>
				<Right>
					<Description>
						<DescItems>
							<DescTOPLeft>
								<Title>{book.title}</Title>
								<Author>{book.author}</Author>
							</DescTOPLeft>
							<Link target='_blank' href={book.linkToRead}>
								<DescTOPRight>Читать</DescTOPRight>
							</Link>
						</DescItems>
						<DescItems>
							<Center>
								<CenterWrapper>
									<CenterItems className='title'>Рейтинг</CenterItems>
									<CenterItems>{book.rating}/10</CenterItems>
								</CenterWrapper>
								<CenterWrapper>
									<CenterItems className='title'>Язык</CenterItems>
									<CenterItems>{book.language}</CenterItems>
								</CenterWrapper>
								<CenterWrapper>
									<CenterItems className='title'>Страницы</CenterItems>
									<CenterItems>{book.pages}</CenterItems>
								</CenterWrapper>
							</Center>
						</DescItems>
						<DescItems className='desc'>
							<BottomTitle>Описание</BottomTitle>
							<BottomDesc>{book.desc}</BottomDesc>
						</DescItems>
					</Description>
				</Right>
			</Top>
			<Bottom>
				<CenterItems className='title'>Комментарии</CenterItems>
				{/* <Comments>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
        </Comments> */}
				<CreateComment>
					{/* <CenterItems className='title'>Оставить комментарий</CenterItems> */}
					<CommentsWrapper>
						<Input placeholder='Оставить комментарии' />
						<DescTOPRight>Написать</DescTOPRight>
					</CommentsWrapper>
				</CreateComment>
			</Bottom>
		</Container>
	)
}

export default BookModal
