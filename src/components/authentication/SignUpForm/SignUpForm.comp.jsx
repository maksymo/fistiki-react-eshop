import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {
  setActiveComponent,
  signUpStart
} from '../../../redux/authentication/authentication.actions';

import { SignUpContainer } from './SignUpForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';

import {
  isRequired,
  isEmail,
  minLength8,
  maxLength64,
  passwordMatch
} from '../../../utils/validation';

const SignIn = ({ setActiveComponent, signUpStart, valid }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email, password, confirmPassword } = userData;

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = async event => {
    event.preventDefault();
    emailRef.current.ref.current.handleBlur();
    passwordRef.current.ref.current.handleBlur();
    confirmPasswordRef.current.ref.current.handleBlur();
    if (valid) signUpStart({ email, password });
  };

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <form onSubmit={handleSubmit}>
        <Field
          ref={emailRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          validate={[isRequired, isEmail]}
        />
        <Field
          ref={passwordRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="password"
          margin="normal"
          variant="outlined"
          validate={[isRequired, minLength8, maxLength64]}
        />
        <Field
          ref={confirmPasswordRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="confirmPassword"
          margin="normal"
          variant="outlined"
          validate={[isRequired, minLength8, maxLength64, passwordMatch]}
        />
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
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
)(reduxForm({ form: 'SignUpForm' })(SignIn));
