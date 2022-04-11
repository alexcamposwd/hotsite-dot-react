import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  background: ${(props) => props.theme.colors.graphite};

  p {
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
  }
`;
