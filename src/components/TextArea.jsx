import React from 'react'
import * as S from '../styles/components/TextArea'

const TextArea = ({name, text, col, row, value, placeholder}) => {
	return (
		<S.ContainerText>
			<label htmlFor={name}>{text}</label>
			<textarea name={name} cols={col} rows={row} placeholder={placeholder} />
		</S.ContainerText>
	)
}

export default TextArea