import styled from 'styled-components'

export const Title = styled.h1`
	font-size: ${(props) => props.fontSize || '35px'};
	font-weight: 600;
	line-height: ${(props) => props.fontHeight || '42px'};
	margin-bottom: ${(props) => props.bottom};
`

export const Flex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.column || 'row'};
	justify-content: ${(props) => props.justifyContent || 'space-between'};
	margin-bottom: ${(props) => props.bottom};
	width: ${(props) => props.width};
	flex-wrap: ${(props) => props.wrap};
	height: ${(props) => props.height};
`
export const Text = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 19.36px;
	margin-bottom: ${(props) => props.bottom};
`

export const Button = styled.button`
	width: 225px;
	height: 50px;
	background: #fcb242;
	box-shadow: 3px 4px 25px rgba(0, 0, 0, 0.15);
	border-radius: 35px;
	border: none;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	color: white;
`
