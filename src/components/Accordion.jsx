import React, { useRef } from 'react'
import * as S from '../styles/components/Accordion'

const Accordion = ({ items, active, onToggle }) => {
  const { title, text, image } = items;
	const contentEl = useRef();

	return (
		<S.AccordionContainer>
      <S.AccordionItems className={`${active ? "active" : ""}`}>

        <S.AccordionTitle onClick={onToggle} active={active}>
          <h2>{title}</h2>
          <S.FieldIcons> 
            {active
              ? <S.CustomIconUp  active={active} /> 
              : <S.CustomIconDown active={active} />
            }
          </S.FieldIcons>
        </S.AccordionTitle>

        <S.AccordionContent 
          ref={contentEl} 
          style={active
              ? { minHeight: "250px" }
              : { height: "0px" }
          }
        >
          <S.AccordionImage >
            <img src={image} alt={title} />
          </S.AccordionImage>
          <S.AccordionText>
            <p>{text}</p>
          </S.AccordionText>
        </S.AccordionContent>

      </S.AccordionItems>
    </S.AccordionContainer>
	)
}

export default Accordion