import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const Top = styled.div`
	display: flex;
	padding: 10px 0;
`

export const Left = styled.div`
	flex: 1;
	margin-right: 10px;
`

export const BookIMG = styled.img`
	width: 200px;
	height: 300px;
	border-radius: 14px;
	border: 1px solid white;
	box-shadow: 14px 10px 12px -3px rgb(153 149 149 / 30%);
`

export const BTN = styled.button`
	border: 1px solid;
	padding: 10px 20px;
	border-radius: 30px;
	font-size: 22px;
	font-weight: 700;
	width: 202px;
	margin-top: 10px;
	color: white;
	background-color: #fcb242;
	cursor: pointer;
`

export const Right = styled.div`
	flex: 2;
	margin-left: 10px;
`

export const Description = styled.ul`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
`

export const DescItems = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&.desc {
		flex-direction: column;
		align-items: self-start;
	}
`

export const DescTOPLeft = styled.div`
	display: flex;
	flex-direction: column;
	width: 240px;
`

export const Title = styled.h2`
	font-size: 26px;
	font-weight: 700;
`

export const Author = styled.p`
	font-size: 18px;
	font-weight: 500;
`

export const DescTOPRight = styled.button`
	border: 1px solid;
	padding: 10px 20px;
	border-radius: 30px;
	font-size: 22px;
	font-weight: 700;
	color: white;
	background-color: #fcb242;
	cursor: pointer;
	width: 100%;
`

export const Center = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

export const CenterWrapper = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const CenterItems = styled.span`
	&.title {
		font-size: 18px;
		font-weight: 700;
		margin-bottom: 8px;
	}
`

export const BottomTitle = styled.span`
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 5px;
`

export const BottomDesc = styled.p``

export const Bottom = styled.div`
	margin-top: 20px;
`

export const Comments = styled.ul`
	overflow-y: scroll;
	height: 200px;
`

export const CommentsWrapper = styled.div`
	padding: 8px;
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Comment = styled.li`
	border: 1px solid #e8d3b9;
	padding: 10px 20px;
	border-radius: 20px;
	margin: 8px 0;
	margin-right: 10px;
`

export const CreateComment = styled.div`
	width: 100%;
`

export const Input = styled.input`
	width: 96%;
	border: 1px solid #e8d3b9;
	outline: none;
	padding: 10px 20px;
	border-radius: 20px;
	margin: 8px 0px;
	font-size: 16px;
`
