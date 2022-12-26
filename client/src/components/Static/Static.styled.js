import styled from 'styled-components'

export const Statistics = styled.div`
	border: 1px solid #e8d3b9;
	border-radius: 45px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

export const Box = styled.div`
	border: 1px solid #e8d3b9;
	border-radius: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 40px;
	text-align: center;
	color: #003b94;
	flex: 1;
	margin: 20px 30px;
	box-shadow: 14px 10px 12px -3px rgb(153 149 149 / 30%);
`

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	font-weight: 700;
	padding: 10px 20px;

	svg {
		font-size: 35px;
		margin-right: 10px;
	}
`

export const Number = styled.span``

export const Title = styled.h3`
	font-size: 24px;
	margin: 5px 0;
	font-weight: 700;
`

export const SubTitle = styled.p`
	font-size: 18px;
	font-weight: 400;
	padding: 5px 10px;
	height: 50px;
`
