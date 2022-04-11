import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 300px;
  justify-content: center;
  font-family: "Segoe UI", sans-serif;

  label {
    width: auto;
    height: auto;
    font-size: 16px;
    min-height: 150px;
    max-height: 250px;
    text-align: start;
    font-weight: bold;
    padding: 10px 0 0 20px;
    margin-bottom: 20px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grey1};
  }

  textarea {
    width: 100%;
    height: auto;
    min-height: 150px;
    max-height: 250px;
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    padding: 11px;
    border: none;
    outline: none;
    margin-bottom: 20px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grey1};
  }
`;
