import * as React from 'react';
import { Formik, Form } from 'formik';
import { InputField } from '../../ui/Form/InputField';
import { FormWrapper } from '../FormWrapper';
import { Button } from '../../ui/Button/Button';
import { FormButtonWrapper } from '../FormButtonWrapper';
import { SignupValidation } from '../../../schema/SignupValidation';

export const SignUpPageForm = () => (
  // TODO - add validation to te form
  <Formik
    initialValues={{ username: '', email: '', password: '', passwordConfirm: '' }}
    validationSchema={SignupValidation}
    onSubmit={async (values, { setSubmitting }) => {
      console.log('Yeahhhh');
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      //TODO - Improve error message
      <Form>
        <FormWrapper>
          <InputField
            haserror={errors.username && touched.username ? 1 : 0}
            placeholder='Username'
            type='username'
            name='username'
          />
          <InputField
            haserror={errors.email && touched.email ? 1 : 0}
            placeholder='Email'
            type='email'
            name='email'
          />
          <InputField
            haserror={errors.password && touched.password ? 1 : 0}
            placeholder='Password'
            type='password'
            name='password'
          />
          <InputField
            haserror={
              (errors.passwordConfirm && touched.passwordConfirm) ||
              (errors.password && touched.password)
                ? 1
                : 0
            }
            placeholder='Confirm Pasword'
            type='password'
            name='passwordConfirm'
          />
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
