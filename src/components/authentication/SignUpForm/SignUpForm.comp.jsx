import React from 'react';
import { connect } from 'react-redux';

import { setActiveComponent } from '../../../redux/authentication/authentication.actions';

import { SignUpContainer, InputField } from './SignUpForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';

const handleSubmit = event => {
  event.preventDefault();
  console.log('submitted');
};

const handleInputChange = event => {
  const { value, name } = event.target;
  console.log(`name: ${name}, value: ${value}`);
};

const SignIn = ({ setActiveComponent }) => (
  <SignUpContainer>
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
      <InputField
        onChange={handleInputChange}
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        autoComplete="confirmPassword"
        margin="normal"
        variant="outlined"
      />
      <ActionButtonsContainer>
        <Button variant="contained" size="large" color="primary">
          Create Account
        </Button>
        <Button
          size="large"
          color="primary"
          onClick={() => setActiveComponent('signIn')}
        >
          Back to Sign In
        </Button>
      </ActionButtonsContainer>
    </form>
  </SignUpContainer>
);

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component))
});

export default connect(
  null,
  mapActionsToProps
)(SignIn);
