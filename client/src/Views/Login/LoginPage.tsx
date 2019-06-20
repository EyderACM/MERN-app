import React from 'react';
import { LoginPageWrapper } from './components/LoginPageWrapper';
import { TitleText } from '../../components/ui/TitleText/TitleText';

export const LoginPage = () => (
  <LoginPageWrapper>
    <TitleText color='primary' weight='semi-bold'>
      Create Account
    </TitleText>
  </LoginPageWrapper>
);
