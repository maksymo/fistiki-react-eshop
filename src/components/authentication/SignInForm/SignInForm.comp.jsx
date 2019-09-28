import React from 'react';
import { connect } from 'react-redux';

import { setActiveComponent } from '../../../redux/authentication/authentication.actions';

import {
  SignInContainer,
  InputField,
  ForgotPasswordText
} from './SignInForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submitted');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = ({ setActiveComponent }) => {
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
        <ForgotPasswordText
          color={theme.palette.primary.main}
          onClick={() => setActiveComponent('FORGOT_PASSWORD')}
        >
          Forgot Password?
        </ForgotPasswordText>
        <ActionButtonsContainer>
          <Button variant="contained" size="large" color="primary">
            Sign In
          </Button>
          <Button
            mx={2}
            size="large"
            color="primary"
            onClick={() => setActiveComponent('SIGN_UP')}
          >
            Create Account
          </Button>
        </ActionButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component))
});

export default connect(
  null,
  mapActionsToProps
)(SignIn);
