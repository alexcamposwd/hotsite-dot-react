import styled from "styled-components";

export const RegisterContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 360px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 850px) {
    height: auto;
  }
`;
