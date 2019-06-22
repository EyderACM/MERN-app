import * as Yup from 'yup';

export const SignupValidation = Yup.object().shape({
  username: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Username is required!'),
  email: Yup.string()
    .email('Please enter a valid email!')
    .required('Email is required!'),
  password: Yup.string()
    .min(5, 'To short!')
    .max(50, 'To long!')
    .required('Password is required!'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match!'),
});
