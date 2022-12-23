import styled from 'styled-components'

export const Text = styled.p`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight};
	margin-bottom: ${(props) => props.bottom};
	width: ${(props) => props.width};
`
