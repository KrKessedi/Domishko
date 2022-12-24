import React, { useState } from 'react'
import { Button, Flex, Text, Title, Container } from './Welcome.styled'
import Slider from 'react-slick'
import './Carousel.css'
import book1 from '../../images/Books_images/Rectangle 6.png'
import book2 from '../../images/Books_images/Rectangle 8.png'
import book3 from '../../images/Books_images/Rectangle 9.png'
import book4 from '../../images/Books_images/Rectangle 10.png'
import book5 from '../../images/Books_images/Rectangle 11.png'
import book6 from '../../images/Books_images/Rectangle 12.png'
import book7 from '../../images/Books_images/Rectangle 12-1.png'
import book8 from '../../images/Books_images/Rectangle 13.png'
import book9 from '../../images/Books_images/Rectangle 14.png'

import LeftArrow from '../../images/Arrow/Vector.svg'
import RightArrow from '../../images/Arrow/Vector-1.svg'
import Genre from '../../components/Genre/Genre'
import { Modal } from '../../components'

const images = [book1, book2, book3, book4, book5, book6, book7, book8, book9]

const WelcomePage = () => {
	const PrevArrow = ({ onClick }) => {
		return (
			<div className='arrow prev' onClick={onClick}>
				<img src={LeftArrow} alt='' />
			</div>
		)
	}
	const NextArrow = ({ onClick }) => {
		return (
			<div className='arrow next' onClick={onClick}>
				<img src={RightArrow} alt='' />
			</div>
		)
	}

	const [nextIndex, setNextIndex] = useState(0)
	const [preventImage, setPreventImage] = useState(8)

	const setting = {
		infinity: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (prevent, next) => {
			setNextIndex(next)
			setPreventImage(prevent)
			console.log(prevent)
			console.log(next)
		},
	}
	return (
		<Container>
			<Flex bottom={'4em'}>
				<Flex column={'column'} width={'241px'}>
					<Title bottom={'11px'}>Бестселлеры</Title>
					<Text bottom={'20px'}>
						Окунитесь в мир лучших книг в мире по мнению миллионов читателей и
						решите так ли это на самом деле. <br /> Только утро настало, как
						читать захотелось.
					</Text>
					<Button>Смотреть</Button>
				</Flex>
				<Slider {...setting} style={{ width: '800px', margin: '2em auto 0' }}>
					{images.map((img, idx) => (
						<div
							key={idx}
							className={
								idx === nextIndex
									? 'slide activeSlide'
									: idx === nextIndex + 1 ||
									  idx === nextIndex - 1 ||
									  idx === preventImage ||
									  (idx === 8 && nextIndex === 0) ||
									  (idx === 0 && nextIndex === 8)
									? 'slide activeMidleSlide'
									: 'slide'
							}
						>
							<img src={img} alt={img} />
						</div>
					))}
				</Slider>
			</Flex>

			<Flex width={'100%'} bottom={'20px'}>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					Фантастика
				</Title>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					Смотреть все
				</Title>
			</Flex>
			<Genre />
			<Flex width={'100%'} bottom={'20px'}>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					Фантастика
				</Title>
				<Title fontSize={'20px'} fontHeight={'24px'}>
					Смотреть все
				</Title>
			</Flex>
			<Genre flexDirection={'row-reverse'} />
		</Container>
	)
}

export default WelcomePage
