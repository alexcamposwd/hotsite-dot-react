import React from "react";
import * as S from '../styles/pages/Promotion'

import { dataItems } from "../services/sliderData";
import Carousel from "../components/Carousel";

function Promotion() {
  return (
    <S.PromotionContainer id="promotion">
      <Carousel dataItems={dataItems} />
    </S.PromotionContainer>
  );
}

export default Promotion;
