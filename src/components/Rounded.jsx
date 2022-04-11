import React from "react";
import * as S from '../styles/components/Rounded'

const Rounded = ({ dataItems }) => {
  return (
    <S.WrapperRounded>
      <S.RoundedContainer>
        <S.RoundedImage
          alt=""
          img={
            "https://images.pexels.com/photos/2745258/pexels-photo-2745258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        />
        <S.RoundedText>
          <h1>{dataItems[0].title}</h1>
          <p>{dataItems[0].text}</p>
          <p>{dataItems[1].text}</p>
          <p>{dataItems[2].text}</p>
          <p>{dataItems[3].text}</p>
        </S.RoundedText>
      </S.RoundedContainer>
    </S.WrapperRounded>
  );
};

export default Rounded;
