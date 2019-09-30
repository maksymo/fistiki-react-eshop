import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import {
  setActiveComponent,
  signUpStart,
  setSnackbarHidden
} from '../../../redux/authentication/authentication.actions';
import {
  selectSnackbarStatus,
  selectSnackbarMsg,
  selectSnackbarVariant,
  selectLoadingStatus
} from '../../../redux/authentication/authentication.selectors';

import { SignUpContainer } from './SignUpForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';
import CustomSnackbar from '../../common/CustomSnackbar/CustomSnackbar.comp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import {
  isRequired,
  isEmail,
  minLength8,
  maxLength64,
  passwordMatch
} from '../../../utils/validation';

const SignUp = ({
  isLoading,
  setActiveComponent,
  signUpStart,
  snackbarStatus,
  snackbarMsg,
  snackbarVariant,
  setSnackbarHidden,
  valid
}) => {
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
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
          validate={[isRequired, minLength8, maxLength64, passwordMatch]}
        />
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              'Create Account'
            )}
          </Button>
          <Button
            size="large"
            color="primary"
            disabled={isLoading}
            onClick={() => setActiveComponent('SIGN_IN')}
          >
            Back to Sign In
          </Button>
        </ActionButtonsContainer>
      </form>
      <CustomSnackbar
        status={snackbarStatus}
        variant={snackbarVariant}
        msg={snackbarMsg}
        handleClose={setSnackbarHidden}
      />
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  snackbarStatus: selectSnackbarStatus,
  snackbarMsg: selectSnackbarMsg,
  snackbarVariant: selectSnackbarVariant,
  isLoading: selectLoadingStatus
});

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  signUpStart: userData => dispatch(signUpStart(userData)),
  setSnackbarHidden: () => dispatch(setSnackbarHidden())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(reduxForm({ form: 'SignUpForm' })(SignUp));
