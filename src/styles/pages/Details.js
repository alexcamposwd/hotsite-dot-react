import styled from "styled-components";

export const DetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-width: 360px;
  height: auto;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey1};

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
    padding: 20px 15px;
  }
`;
