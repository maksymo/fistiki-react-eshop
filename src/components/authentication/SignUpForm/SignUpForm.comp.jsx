import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  setActiveComponent,
  signUpStart
} from '../../../redux/authentication/authentication.actions';

import { SignUpContainer, InputField } from './SignUpForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';

const SignIn = ({ setActiveComponent, signUpStart }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email, password, confirmPassword } = userData;

  const handleSubmit = event => {
    event.preventDefault();
    signUpStart({ email, password });
  };

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleInputChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <InputField
          onChange={handleInputChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="password"
          margin="normal"
          variant="outlined"
        />
        <InputField
          onChange={handleInputChange}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="confirmPassword"
          margin="normal"
          variant="outlined"
        />
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
          <Button
            size="large"
            color="primary"
            onClick={() => setActiveComponent('SIGN_IN')}
          >
            Back to Sign In
          </Button>
        </ActionButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  signUpStart: userData => dispatch(signUpStart(userData))
});

export default connect(
  null,
  mapActionsToProps
)(SignIn);
