import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { InputField } from '../../ui/Form/InputField';
import { FormWrapper } from '../FormWrapper';
import { Button } from '../../ui/Button/Button';
import { FormButtonWrapper } from '../FormButtonWrapper';

export const SignUpPageForm = () => (
  // TODO - add validation to te form
  <Formik
    initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormWrapper>
          <InputField placeholder='Username' type='username' name='username' />
          <InputField placeholder='Email' type='email' name='email' />
          <InputField placeholder='Password' type='password' name='password' />
          <InputField placeholder='Confirm Pasword' type='password' name='passwordConfirm' />
          <FormButtonWrapper>
            <Button type='submit' disabled={isSubmitting}>
              Sign up
            </Button>
          </FormButtonWrapper>
        </FormWrapper>
      </Form>
    )}
  </Formik>
);
