import React from 'react';
import { SignupPageWrapper } from './components/SignupPageWrapper';
import { TitleText } from '../../components/ui/TitleText/TitleText';
import { SignUpPageForm } from '../../components/Forms/SignupPageForm/SignupPageForm';

export const SignupPage = () => (
  <SignupPageWrapper>
    <TitleText color='primary' weight='semi-bold'>
      Create Account
    </TitleText>
    <SignUpPageForm />
  </SignupPageWrapper>
);
