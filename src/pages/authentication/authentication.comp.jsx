import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  setActiveComponent,
  setSnackbarHidden
} from '../../redux/authentication/authentication.actions';
import {
  selectActiveComponent,
  selectSnackbarStatus,
  selectSnackbarMsg,
  selectSnackbarVariant
} from '../../redux/authentication/authentication.selectors';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import {
  AuthenticationContainer,
  AuthenticationImgContainer,
  AuthenticationImg,
  AuthenticationFormContainer,
  AuthenticationFormWrapper,
  SocialSignInContainer,
  FormTitle
} from './Authentication.styles';
import { Title } from '../../App.styles';

import CustomSnackbar from '../../components/common/CustomSnackbar/CustomSnackbar.comp';
import SignInForm from '../../components/authentication/SignInForm/SignInForm.comp';
import SignUpForm from '../../components/authentication/SignUpForm/SignUpForm.comp';
import VerifySignUp from '../../components/authentication/VerifySignUp/VerifySignUp.comp';
import ForgotPassword from '../../components/authentication/ForgotPassword/ForgotPassword.comp';
import ForgotPasswordSubmit from '../../components/authentication/ForgotPasswordSubmit/ForgotPasswordSubmit.comp';

import pistachiosImage from '../../assets/images/signIn/greek-pistachios.jpg';

const pageHeaderOptions = {
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Create New Account',
  VERIFY_EMAIL: 'Verify E-mail Address',
  FORGOT_PASSWORD: 'Forgot Password',
  FORGOT_PASSWORD_SUBMIT: 'Retrieve Password'
};

const formTitleOptions = {
  SIGN_IN: 'or sign in with your email',
  SIGN_UP: 'or sign in with your email',
  VERIFY_EMAIL: 'type the code your received in your email address',
  FORGOT_PASSWORD: 'type your email address to get a verification email',
  FORGOT_PASSWORD_SUBMIT: 'type your new password to reset it'
};

const AuthenticationPage = ({
  activeComponent,
  snackbarStatus,
  snackbarMsg,
  snackbarVariant,
  setSnackbarHidden
}) => (
  <Container maxWidth="xl">
    <AuthenticationContainer>
      <AuthenticationImgContainer>
        <AuthenticationImg src={pistachiosImage} alt="greek pistachios" />
      </AuthenticationImgContainer>
      <AuthenticationFormContainer>
        <AuthenticationFormWrapper>
          <Title fontSize="2em">{pageHeaderOptions[activeComponent]}</Title>
          {activeComponent === 'SIGN_IN' || activeComponent === 'SIGN_UP' ? (
            <SocialSignInContainer>
              <IconButton aria-label="google">
                <FontAwesomeIcon size="lg" icon={faGoogle} />
              </IconButton>
              <IconButton aria-label="facebook">
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </IconButton>
            </SocialSignInContainer>
          ) : null}
          <FormTitle>{formTitleOptions[activeComponent]}</FormTitle>
          {activeComponent === 'SIGN_IN' ? <SignInForm /> : null}
          {activeComponent === 'SIGN_UP' ? <SignUpForm /> : null}
          {activeComponent === 'VERIFY_EMAIL' ? <VerifySignUp /> : null}
          {activeComponent === 'FORGOT_PASSWORD' ? <ForgotPassword /> : null}
          {activeComponent === 'FORGOT_PASSWORD_SUBMIT' ? (
            <ForgotPasswordSubmit />
          ) : null}
        </AuthenticationFormWrapper>
      </AuthenticationFormContainer>
      <CustomSnackbar
        status={snackbarStatus}
        variant={snackbarVariant}
        msg={snackbarMsg}
        handleClose={setSnackbarHidden}
      />
    </AuthenticationContainer>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  activeComponent: selectActiveComponent,
  snackbarStatus: selectSnackbarStatus,
  snackbarMsg: selectSnackbarMsg,
  snackbarVariant: selectSnackbarVariant
});

const mapActionsToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  setSnackbarHidden: () => dispatch(setSnackbarHidden())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AuthenticationPage);
