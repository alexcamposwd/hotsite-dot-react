import styled from "styled-components";

export const HomeContainer = styled.article`
  width: 100vw;
  min-width: 360px;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey3};
`;
