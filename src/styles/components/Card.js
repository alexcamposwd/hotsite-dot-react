import styled, { css } from "styled-components";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";

export const WrapperCard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 0 auto;
  gap: 20px;
  font-family: "Segoe UI", sans-serif;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: auto;
  white-space: nowrap;
  overflow-x: scroll;
  margin: 10px;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

export const CardItems = styled.div`
  display: inline-block;
  width: 31%;
  height: 100%;
  background: transparent;
  margin-left: 1.1%;
  margin-right: 1.1%;

  @media (max-width: 850px) {
    width: 97.45%;
    margin-left: 1%;
    margin-right: 1%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border: 10px solid ${(props) => props.theme.colors.grey2};

  @media (max-width: 850px) {
    max-width: 100%;
    max-height: 220px;
    min-height: 220px;
  }
`;

export const TitleCard = styled.h3`
  width: 100%;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

export const TextCard = styled.p`
  display: flex;
  width: 100%;
  height: 30%;
  font-size: 17px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  white-space: normal;

  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

export const ContainerBtns = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: none;

  @media (max-width: 850px) {
    position: relative;
    height: 50px;
    bottom: 0;

    justify-content: space-between;
  }
`;

export const sharedIconStyleLeft = css`
  position: absolute;
  height: 67%;
  font-size: 40px;
  margin-bottom: 150px;
  left: 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.grey1};
  }

  @media (max-width: 850px) {
    position: block;
    height: 40px;
    margin-left: 80px;
  }
`;

export const sharedIconStyleRight = css`
  position: absolute;
  height: 67%;
  font-size: 40px;
  margin-bottom: 150px;
  right: 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors.grey1};
  }

  @media (max-width: 850px) {
    position: block;
    height: 40px;
    margin-right: 80px;
  }
`;

export const StyleArrowLeft = styled(ImArrowLeft2)`
  ${sharedIconStyleLeft}
`;

export const StyleArrowRight = styled(ImArrowRight2)`
  ${sharedIconStyleRight}
`;
