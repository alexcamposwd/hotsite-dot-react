import React, { useState, useEffect, useRef } from "react";
import * as S from '../styles/components/Card'

const Card = ({ dataItems, handleChange }) => {
  const ref = useRef(null);
  const [elemProps, setElemProps] = useState({
    width: undefined,
    height: undefined,
  });
  const elemWidth = elemProps.width;
  let calcWidth = elemWidth / 1.005;

  useEffect(() => {
    function handleResize() {
      setElemProps({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  function slideLeft() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - calcWidth;
  };
  
  function slideRight() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + calcWidth;
  };
  
  return (
    <S.WrapperCard>
      <S.ContainerCards id="slider" ref={ref}>
        {dataItems.map((slide, index) => (
          <S.CardItems key={index}>
            <S.Item>
              <S.ImageCard src={slide.image} />
              <S.TitleCard>{slide.title}</S.TitleCard>
              <S.TextCard>{slide.text}</S.TextCard>
            </S.Item>
          </S.CardItems>
        ))}
      </S.ContainerCards>
      <S.ContainerBtns>
        <S.StyleArrowLeft onClick={slideLeft} />
        <S.StyleArrowRight onClick={slideRight} />
      </S.ContainerBtns>
    </S.WrapperCard>
  );
};

export default Card;
