import styled from 'styled-components'
import AuthImage from '../../images/Auth.jpg'

export const Container = styled.div`
	width: 100vw;
	/* height: 100vh; */
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Wrapper = styled.div`
	width: 50%;
	border-radius: 80px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const Image = styled.div`
	background-image: url(${AuthImage});
	background-repeat: no-repeat;
	width: 50%;
	height: 57vw;
	z-index: -1000;
`
export const Title = styled.h1`
	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
	width: 370px;
	text-align: center;
	/* padding: 20px; */
	margin: ${(props) => props.margin};
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
`
export const Label = styled.label`
	margin: 10px 0;
	font-size: 18px;
	font-weight: 700;
	color: #434140;
`

export const Input = styled.input`
	border: 1px solid #e8d3b9;
	border-radius: 20px;
	padding: 8px 16px;
	height: 53px;
	font-size: 16px;
	outline: none;
	margin-bottom: ${(props) => props.bottom};

	&::placeholder {
		color: #555;
	}
`

export const Button = styled.button`
	border: 1px solid white;
	border-radius: 22px;
	padding: 10px;
	font-size: 20px;
	font-weight: 800;
	width: 223px;
	height: 51px;
	color: white;
	background-color: #fcb242;
	cursor: pointer;
	margin: 40px auto;
`

export const RegisterLink = styled.div``

export const Link = styled.span`
	font-weight: 600;
	margin-left: 10px;
	cursor: pointer;
`
