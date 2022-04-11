import styled from "styled-components";

export const WrapperRegister = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  background-image: linear-gradient(
    to top left,
    ${(props) => props.theme.colors.grey2} 50%,
    ${(props) => props.theme.colors.grey3} 50%
  );

  @media (max-width: 850px) {
    padding: 15px 0;
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
    height: 90%;
  }
`;

export const FieldContact = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 15px;

  &:nth-child(2) {
    margin-left: 20px;

    @media (max-width: 850px) {
      margin-left: 0px;
    }
  }
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 7px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  width: auto;
  margin-top: 5px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.redmd};
  color: ${(props) => props.theme.colors.white};
`;

export const SuccessMessage = styled.div`
  width: auto;
  margin-top: 25px;
  padding: 20px 40px;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.greenSuccess};
  color: ${(props) => props.theme.colors.white};
  z-index: 100;
`;
