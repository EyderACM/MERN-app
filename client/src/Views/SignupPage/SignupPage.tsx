import React from 'react';
import { SignupPageWrapper } from './components/SignupPageWrapper';
import { TitleText } from '../../components/ui/TitleText/TitleText';
import { SignUpPageForm } from '../../components/Forms/SignupPageForm/SignupPageForm';
import { H4 } from '../../components/ui/H4/H4';
import { Link } from 'react-router-dom';

export const SignupPage = () => (
  <SignupPageWrapper>
    <TitleText color='primary' weight='semi-bold'>
      Create Account
    </TitleText>
    <SignUpPageForm />
    <H4 color='secondary'>
      Already have an account? <Link to='/login'>Sign in</Link>
    </H4>
  </SignupPageWrapper>
);
