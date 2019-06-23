import * as React from 'react';
import { Formik, Form } from 'formik';
import { InputField } from '../../ui/Form/InputField';
import { FormWrapper } from '../../Forms/FormWrapper';
import { Button } from '../../ui/Button/Button';
import { FormButtonWrapper } from '../../Forms/FormButtonWrapper';

export const LoginPageForm = () => (
  // TODO - add validation to the form
  <Formik
    initialValues={{ email: '', password: '' }}
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
          <InputField placeholder='Email' type='email' name='email' />
          <InputField placeholder='Password' type='password' name='password' />
          <FormButtonWrapper>
            <Button type='submit' disabled={isSubmitting}>
              Sign in
            </Button>
          </FormButtonWrapper>
        </FormWrapper>
      </Form>
    )}
  </Formik>
);
