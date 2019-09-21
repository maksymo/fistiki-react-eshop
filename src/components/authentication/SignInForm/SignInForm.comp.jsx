import React from 'react';
import { connect } from 'react-redux';

import { setActiveComponent } from '../../../redux/authentication/authentication.actions';

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
          onClick={() => setActiveComponent('forgotPassword')}
        >
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
        <Button
          margin="1em 0 0 0.5em"
          size="large"
          color="primary"
          onClick={() => setActiveComponent('signUp')}
        >
          Create Account
        </Button>
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
