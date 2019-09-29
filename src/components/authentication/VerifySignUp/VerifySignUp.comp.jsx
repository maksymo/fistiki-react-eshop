import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';

import {
  setActiveComponent,
  verifyEmailAddressStart,
  resendVerificationEmailStart,
  setSnackbarHidden
} from '../../../redux/authentication/authentication.actions';

import {
  selectCurrentUser,
  selectSnackbarStatus,
  selectSnackbarMsg,
  selectSnackbarVariant
} from '../../../redux/authentication/authentication.selectors';

import {
  VerifySignUpContainer,
  ResendVerificationEmailText
} from './VerifySignUp.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { useTheme } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import CustomSnackbar from '../../common/CustomSnackbar/CustomSnackbar.comp';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';

import { isRequired } from '../../../utils/validation';

const SignIn = ({
  setActiveComponent,
  currentUser,
  verifyEmailAddressStart,
  resendVerificationEmailStart,
  snackbarStatus,
  snackbarMsg,
  snackbarVariant,
  setSnackbarHidden,
  valid
}) => {
  const [verificationCode, setVerificationCode] = useState('');

  const codeRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    codeRef.current.ref.current.handleBlur();
    if (valid) {
      verifyEmailAddressStart({
        code: verificationCode,
        username: currentUser.username
      });
    }
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setVerificationCode(value);
  };
  const theme = useTheme();
  return (
    <VerifySignUpContainer>
      <form onSubmit={handleSubmit}>
        <Field
          ref={codeRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Verification Code"
          type="text"
          name="verificationCode"
          value={verificationCode}
          margin="normal"
          variant="outlined"
          validate={[isRequired]}
        />
        <ResendVerificationEmailText
          color={theme.palette.primary.main}
          onClick={() => resendVerificationEmailStart(currentUser.username)}
        >
          Resend Verification E-mail
        </ResendVerificationEmailText>
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            size="large"
            color="primary"
            onClick={() => setActiveComponent('SIGN_UP')}
          >
            Cancel
          </Button>
        </ActionButtonsContainer>
      </form>
      <CustomSnackbar
        status={snackbarStatus}
        variant={snackbarVariant}
        msg={snackbarMsg}
        handleClose={setSnackbarHidden}
      />
    </VerifySignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  snackbarStatus: selectSnackbarStatus,
  snackbarMsg: selectSnackbarMsg,
  snackbarVariant: selectSnackbarVariant
});

const mapDispatchToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  verifyEmailAddressStart: verificationData =>
    dispatch(verifyEmailAddressStart(verificationData)),
  resendVerificationEmailStart: username =>
    dispatch(resendVerificationEmailStart(username)),
  setSnackbarHidden: () => dispatch(setSnackbarHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'VerifySignUpForm' })(SignIn));
