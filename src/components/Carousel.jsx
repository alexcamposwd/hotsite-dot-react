import React from "react";
import * as S from '../styles/components/Carousel'

import { dataItems } from "../services/sliderData";
import Card from "./Card";

const Carousel = () => {
  return (
    <S.CarouselContainer>
      <Card dataItems={dataItems} />
    </S.CarouselContainer>
  );
};

export default Carousel;
