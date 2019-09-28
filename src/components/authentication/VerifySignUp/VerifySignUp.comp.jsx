import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  setActiveComponent,
  verifyEmailAddressStart,
  resendVerificationEmailStart
} from '../../../redux/authentication/authentication.actions';

import { selectCurrentUser } from '../../../redux/authentication/authentication.selectors';

import {
  VerifySignUpContainer,
  InputField,
  ResendVerificationEmailText
} from './VerifySignUp.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { useTheme } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const SignIn = ({
  setActiveComponent,
  currentUser,
  verifyEmailAddressStart,
  resendVerificationEmailStart
}) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    verifyEmailAddressStart({
      code: verificationCode,
      username: currentUser.username
    });
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setVerificationCode(value);
  };
  const theme = useTheme();
  return (
    <VerifySignUpContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleInputChange}
          label="Verification Code"
          type="text"
          name="verificationCode"
          margin="normal"
          variant="outlined"
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
            onClick={handleSubmit}
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
    </VerifySignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  verifyEmailAddressStart: verificationData =>
    dispatch(verifyEmailAddressStart(verificationData)),
  resendVerificationEmailStart: username =>
    dispatch(resendVerificationEmailStart(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
