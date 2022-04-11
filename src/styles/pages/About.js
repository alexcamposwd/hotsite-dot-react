import styled from "styled-components";

export const AboutContainer = styled.article`
  width: 100vw;
  min-width: 360px;
  height: 70vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey2};

  @media (max-width: 850px) {
    height: auto;
  }
`;
