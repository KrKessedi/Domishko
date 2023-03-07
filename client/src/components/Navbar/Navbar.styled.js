import styled from 'styled-components'

export const NavbarStyled = styled.div`
	width: 100%;
	margin-bottom: 2.56vw;
`
export const Flex = styled.div`
	height: ${props => props.height};
	width: ${props => props.width};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: ${props => props.margin || 0};
`

export const Input = styled.input`
	width: clamp(200px, 50vw, 1000px);
	border-radius: 25px;
	border: 1px solid #e8d3b9;
	height: clamp(2em, 10vw, 49px);
	outline: none;
	padding: 5px;
	@media all and (max-width: 1000px) {
		width: 200px;
	}
`

export const Logo = styled.div`
	width: 300px;
	height: 50px;
	background-color: #ff3321;
`

export const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	column-gap: 3rem;
	margin-left: 40px;

	svg {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #c7c7c7;
		font-size: 30px;
		cursor: pointer;
		padding: 6px;
		color: black;
	}
`

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
`

export const Title = styled.p`
	font-size: 18px;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	border: 1px solid;
	padding: 10px 20px;
	border-radius: 20px;
	width: 205px;
	text-align: center;
	@media all and (max-width: 1700px) {
		width: 150px;
	}

	&:hover {
		color: white;
		background: #ff8c00;
	}
`
