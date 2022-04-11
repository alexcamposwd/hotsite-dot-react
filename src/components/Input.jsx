import React from 'react'
import * as S from '../styles/components/Input'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
	return (
		<S.InputControl>
			<label htmlFor={name}>{text}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={handleOnChange}
				value={value}
			/>
		</S.InputControl>
	)
}

export default Input