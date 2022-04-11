import React from "react";
import * as S from '../styles/pages/Register'

import Form from "../components/Form";
import Footer from "../components/Footer";

function Register() {
  return (
    <S.RegisterContainer id="register">
        <Form />
        <Footer />
    </S.RegisterContainer>
  )
}

export default Register;
