import styled, { css } from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export const AccordionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  max-height: 500px;
  justify-content: center;
  font-family: "Segoe UI", sans-serif;
  border-radius: 10px;

  &:nth-child(1) > div > div {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }

  &:nth-child(5) > div > div {
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }

  @media (max-width: 850px) {
    width: 95%;
  }
`;

export const AccordionItems = styled.div`
  height: auto;
  max-height: 500px;
  margin: 1px;
  border-radius: 10px;
`;

export const AccordionTitle = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.active === true
      ? css`
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.grey2};
        `
      : css`
          background-color: ${(props) => props.theme.colors.grey2};
          color: ${(props) => props.theme.colors.white};
        `}

  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: start;
    padding-left: 5px;
  }

  @media (max-width: 850px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const FieldIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const sharedIconStyle = css`
  font-size: 26px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.grey1};
  }

  ${(props) =>
    props.active === true
      ? css`
          color: ${(props) => props.theme.colors.grey2};
        `
      : css`
          color: ${(props) => props.theme.colors.white};
        `}
`;

export const CustomIconDown = styled(AiOutlineArrowDown)`
  ${sharedIconStyle}
`;
export const CustomIconUp = styled(AiOutlineArrowUp)`
  ${sharedIconStyle}
`;

export const AccordionContent = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 850px) {
    flex-direction: column;
    min-width: 100%;
    align-items: center;
  }
`;

export const AccordionImage = styled.div`
  display: flex;
  max-width: 350px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    min-width: 100%;
    height: 200px;
    border: 10px solid gray;
  }

  @media (max-width: 850px) {
    padding: 15px 15px 0 15px;

    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export const AccordionText = styled.div`
  width: 80%;
  height: auto;
  max-height: 500px;
  margin: auto 0;
  padding: 10px 30px 10px 20px;

  p {
    font-size: 18px;
    text-align: start;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 0;
    margin-top: 15px;

    p {
      font-size: 16px;
      text-align: justify;
      padding: 0px 15px 15px 15px;
    }
  }
`;
