import * as React from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { InputField } from "../../ui/Form/InputField";
import { FormWrapper } from "../FormWrapper";
import { Button } from "../../ui/Button/Button";
import { FormButtonWrapper } from "../FormButtonWrapper";
import { SignupValidation } from "../../../schema/SignupValidation";
import { setAlert } from "../../../actions/alert";

const SignUpPageForm: React.FC = () => {
  const hasErrorEvaluate = (
    param1: string | undefined,
    param2: boolean | undefined
  ) => {
    return param1 && param2 ? 1 : 0;
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={SignupValidation}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Yeahhhh");
      }}
    >
      {({
        errors: { username, email, password, passwordConfirm },
        touched: {
          username: uUsername,
          email: uEmail,
          password: uPassword,
          passwordConfirm: uPasswordConfirm,
        },
        isSubmitting,
      }) => (
        //TODO - Improve error message
        <Form>
          <FormWrapper>
            <InputField
              haserror={hasErrorEvaluate(username, uUsername)}
              placeholder="Username"
              type="username"
              name="username"
            />
            <InputField
              haserror={hasErrorEvaluate(email, uEmail)}
              placeholder="Email"
              type="email"
              name="email"
            />
            <InputField
              haserror={hasErrorEvaluate(password, uPassword)}
              placeholder="Password"
              type="password"
              name="password"
            />
            <InputField
              haserror={
                hasErrorEvaluate(passwordConfirm, uPasswordConfirm) ||
                hasErrorEvaluate(password, uPassword)
                  ? 1
                  : 0
              }
              placeholder="Confirm Pasword"
              type="password"
              name="passwordConfirm"
            />
            <FormButtonWrapper>
              <Button type="submit" disabled={isSubmitting}>
                Sign up
              </Button>
            </FormButtonWrapper>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default connect(
  null,
  { setAlert }
)(SignUpPageForm);
