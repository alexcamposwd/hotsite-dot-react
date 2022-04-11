import React from "react";
import * as S from '../styles/pages/Home'

import { slideData } from "../services/sliderData";
import Slider from "../components/Slider";

function Home() {
  return (
    <S.HomeContainer id="home">
      <Slider slideData={slideData} />
    </S.HomeContainer>
  );
}

export default Home;
