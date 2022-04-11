import React, {useState, useEffect} from 'react'
import * as S from '../styles/components/Form'

import Input from './Input'
import InputFone from './InputFone';
import TextArea from './TextArea'

const Form = () => {
	const initialValues = {
    name: "",
    email: "",
    fone: "",
    message: ""
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
	
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regextFone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    if(!values.name) {
      errors.name = "Nome é obrigatório!"
    } else if(values.name.length < 3) {
      errors.name = "Nome deve ter no mínimo 3 dígitos!"
    }
    if(!values.email) {
      errors.email = "E-mail é obrigatório!"
    } else if(!regexEmail.test(values.email)) {
      errors.email = "Este e-mail não é válido!"
    }
    if(!values.fone) {
      errors.fone = "Telefone é obrigatório!"
    } else if(!regextFone.test(values.fone)) {
      errors.fone = "Este telefone não é válido!"
    }
    return errors
  }

	return (
		<S.WrapperRegister>
			<S.FormRegister onSubmit={handleSubmit}>
				
				<S.FieldItem>
					<Input 
						type="text"
						text="Nome:"
						name="name"
						placeholder="Informe seu nome"
						value={formValues.name}
						handleOnChange={handleChange}
					/>
					<S.ErrorMessage>{ formErrors.name }</S.ErrorMessage>
				</S.FieldItem>

				<S.FieldContact>
					<S.FieldItem>
						<Input 
							type="text"
							text="Email:"
							name="email"
							placeholder="Informe seu email"
							value={formValues.email}
							handleOnChange={handleChange}
						/>
						<S.ErrorMessage>{ formErrors.email }</S.ErrorMessage>
					</S.FieldItem>

					<S.FieldItem>
						<InputFone
							type="text"
							text="Telefone:"
							name="fone"
							placeholder="(__) ____-____"
							value={formValues.fone}
							handleOnChange={handleChange}
						/>
						<S.ErrorMessage>{ formErrors.fone }</S.ErrorMessage>
					</S.FieldItem>
				</S.FieldContact>

				<S.FieldItem>
					<TextArea 
						name="message"
						text="Mensagem:"
						placeholder="Escreva aqui"
						value={formValues.message}
						handleOnChange={handleChange}
					/>
				</S.FieldItem>

				<S.Button type="submit" onClick={() => console.log(formValues)}>Enviar</S.Button>

				{Object.keys(formErrors).length === 0 && isSubmit 
					? (
							<S.SuccessMessage>
								<p>Dados Enviado com sucesso!</p>
								<p>Obrigado pelo desafio!</p>
							</S.SuccessMessage>
						) 
					: ("")
				}

			</S.FormRegister>
		</S.WrapperRegister>
	)
}

export default Form