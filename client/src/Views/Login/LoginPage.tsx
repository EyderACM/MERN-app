import * as React from "react";
import { LoginPageWrapper } from "./components/LoginPageWrapper";
import { TitleText } from "components/ui/TitleText/TitleText";
import { LoginPageForm } from "components/Forms/LoginPageForm/LoginPageForm";

export const LoginPage = () => (
  <LoginPageWrapper>
    <TitleText color="primary" weight="semi-bold">
      Login
    </TitleText>
    <LoginPageForm />
  </LoginPageWrapper>
);
