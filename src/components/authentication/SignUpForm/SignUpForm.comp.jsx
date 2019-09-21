import React from 'react';
import { connect } from 'react-redux';

import { setActiveComponent } from '../../../redux/authentication/authentication.actions';

import { SignUpContainer, InputField } from './SignUpForm.styles';

import Button from '../../common/Button/Button.comp';

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
      <Button
        margin="1em 0.5em 0 0"
        variant="contained"
        size="large"
        color="primary"
      >
        Create Account
      </Button>
      <Button
        margin="1em 0 0 0.5em"
        size="large"
        color="primary"
        onClick={() => setActiveComponent('signIn')}
      >
        Back to Sign In
      </Button>
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
