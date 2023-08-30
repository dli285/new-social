import React from "react";
import "./LoginPage.scss";
import { Container } from "../../components/Container/Container";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { RegistrationInfo } from "../../components/RegistartionInfo/RegistrationInfo";

export const LoginPage = () => {
  return (
    <Container>
    <div className="LoginPage">
    <AppHeader type="h1" headerText="Авторизация"/>
      <form action="#">
        <AppInput type="tel" inputPlaceholder="Номер телефона"/>
        <AppInput type="password" inputPlaceholder="Пароль" />
        <button>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </div>
    </Container>
  );
};
