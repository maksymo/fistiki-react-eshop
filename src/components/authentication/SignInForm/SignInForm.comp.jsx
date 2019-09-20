import React from 'react';

import {
  SignInContainer,
  InputField,
  ForgotPasswordText
} from './SignInForm.styles';

import Button from '../../common/Button/Button.comp';

import { useTheme } from '@material-ui/styles';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submitted');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = () => {
  const theme = useTheme();
  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleInputChange}
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <InputField
          onChange={handleInputChange}
          label="Password"
          type="password"
          name="password"
          autoComplete="password"
          margin="normal"
          variant="outlined"
        />
        <ForgotPasswordText color={theme.palette.primary.main}>
          Forgot Password?
        </ForgotPasswordText>
        <Button
          margin="1em 0.5em 0 0"
          variant="contained"
          size="large"
          color="primary"
        >
          Sign In
        </Button>
        <Button margin="1em 0 0 0.5em" size="large" color="primary">
          Create Account
        </Button>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
