import React, { useEffect, useState } from "react";
import * as S from '../styles/components/Slider'

const Slider = ({ slideData, autoPlayTime = 3000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex(slideIndex + 1);
      if (slideIndex === slideData.length - 1) setSlideIndex(0);
    }, autoPlayTime);
    return () => clearTimeout(timer);
  }, [slideIndex, slideData.length, autoPlayTime]);

  const next = () => {
    setSlideIndex((state) => (state += 1));
    if (slideIndex === slideData.length - 1) setSlideIndex(0);
  };

  const prev = () => {
    setSlideIndex((state) => (state -= 1));
    if (slideIndex === 0) setSlideIndex(slideData.length - 1);
  };

  const handleClick = () => {
    const el = document.getElementById("promotion")
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Wrapper>
      <S.SliderContainer>
        <S.TitleSlider>{slideData[slideIndex].title}</S.TitleSlider>
        <S.TextSlider>{slideData[slideIndex].text}</S.TextSlider>
        <S.IconContainer onClick={handleClick}>
            <S.CustomIcon />
        </S.IconContainer>
        <S.ImageContainer src={slideData[slideIndex].image} />
        <S.NavButton right onClick={next}></S.NavButton>
        <S.NavButton onClick={prev}></S.NavButton>
        <S.DotContainer>
          {slideData.map((dot, index) => (
            <S.Dot key={dot.image} active={index === slideIndex} onClick={() => setSlideIndex(index)}/>
          ))}
        </S.DotContainer>
      </S.SliderContainer>
    </S.Wrapper>
  );
};

export default Slider;
