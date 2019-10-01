import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';

import {
  selectLoadingStatus,
  selectCurrentUser
} from '../../../redux/authentication/authentication.selectors';
import {
  setActiveComponent,
  forgotPasswordSubmitStart
} from '../../../redux/authentication/authentication.actions';

import { ForgotPasswordSubmitContainer } from './ForgotPasswordSubmit.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';
import {
  isRequired,
  passwordMatch,
  minLength8,
  maxLength64
} from '../../../utils/validation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordSubmit = ({
  setActiveComponent,
  forgotPasswordSubmitStart,
  isLoading,
  currentUser,
  valid
}) => {
  const [credentials, setCredentials] = useState({
    code: '',
    password: '',
    confirmPassword: ''
  });
  const { password, confirmPassword, code } = credentials;

  const codeRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    codeRef.current.ref.current.handleBlur();
    passwordRef.current.ref.current.handleBlur();
    confirmPasswordRef.current.ref.current.handleBlur();
    if (valid) {
      forgotPasswordSubmitStart({
        username: currentUser.username,
        code,
        new_password: confirmPassword
      });
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <ForgotPasswordSubmitContainer>
      <form onSubmit={handleSubmit}>
        <Field
          ref={codeRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Verification Code"
          type="text"
          name="code"
          value={code}
          margin="normal"
          variant="outlined"
          disabled={isLoading}
          validate={[isRequired]}
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
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Submit'}
          </Button>
          <Button
            size="large"
            color="primary"
            disabled={isLoading}
            onClick={() => setActiveComponent('SIGN_IN')}
          >
            Cancel
          </Button>
        </ActionButtonsContainer>
      </form>
    </ForgotPasswordSubmitContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  forgotPasswordSubmitStart: credentials =>
    dispatch(forgotPasswordSubmitStart(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'ForgotPasswordSubmitForm' })(ForgotPasswordSubmit));
