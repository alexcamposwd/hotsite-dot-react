import styled from "styled-components";

export const WrapperRounded = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
`;

export const RoundedContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const RoundedImage = styled.div`
  width: 50%;
  max-width: 400px;
  min-width: 200px;
  border-radius: 50%;
  border: 15px solid ${(props) => props.theme.colors.grey4};
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  aspect-ratio: 1;

  @media (max-width: 850px) {
    display: block;
    width: 90%;
    margin-top: 20px;
  }
`;

export const RoundedText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 300px;
  height: 500px;
  justify-content: center;
  padding: 50px;
  gap: 15px;

  h1 {
    font-size: 35px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: start;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    font-size: 17px;
    text-align: start;
    color: ${(props) => props.theme.colors.white};

    &:nth-child(3) {
      font-weight: bold;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
    justify-content: center;
    padding: 40px 20px;

    h1 {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }
`;
