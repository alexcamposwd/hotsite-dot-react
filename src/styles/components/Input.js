import styled from "styled-components";

export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "Segoe UI", sans-serif;

  label {
    display: flex;
    width: auto;
    height: 50px;
    text-align: end;
    font-weight: bold;
    align-items: center;
    padding: 5px 0 5px 20px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grey1};
  }

  input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 0;
    border: none;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grey1};
  }
`;
