import React from "react";
import * as S from '../styles/pages/About'

import { dataItems } from "../services/sliderData";
import Rounded from "../components/Rounded";

function About() {
  return (
    <S.AboutContainer id="about">
      <Rounded dataItems={dataItems} />
    </S.AboutContainer>
  );
}

export default About;
