import styled, { css } from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
  background-color: ${(props) => props.theme.colors.grey3};
`;

export const SliderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const TitleSlider = styled.h1`
  position: absolute;
  width: 100%;
  font-size: 54px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
  margin-top: 30px;

  @media (max-width: 850px) {
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
    margin-top: 10px;
  }
`;

export const TextSlider = styled.p`
  position: absolute;
  width: 100%;
  font-size: 28px;
  text-align: center;
  color: ${(props) => props.theme.colors.greendark};
  margin-top: 100px;
  @media (max-width: 850px) {
    font-size: 17px;
    padding: 0 15px;
    margin-top: 50px;
    padding: 0 50px;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const IconContainer = styled.button`
  position: absolute;
  text-align: center;
  left: calc(50% - 25px);
  margin-top: 160px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 850px) {
    margin-top: 130px;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
  @media (max-width: 850px) {
    height: calc(100% - 120px);
    margin-top: 120px;
  }
`;

export const NavButton = styled.div`
  position: absolute;
  width: 45%;
  height: 100%;
  padding: 0;
  background: transparent;
  top: 0;
  cursor: pointer;
  ${(props) =>
    props.right === true
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`;

export const sharedIconStyle = css`
  font-size: 50px;
  color: ${(props) => props.theme.colors.grey3};
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CustomIcon = styled(AiOutlineArrowDown)`
  ${sharedIconStyle}
`;

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 70px;
  gap: 12px;
  left: 50%;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.7);
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;

  ${(props) =>
    props.active === true
      ? css`
          background-color: ${(props) => props.theme.colors.greendark};
          border: 5px solid ${(props) => props.theme.colors.white};
        `
      : css`
          background-color: ${(props) => props.theme.colors.white};
          border: 5px solid ${(props) => props.theme.colors.grey5};
        `}
`;
